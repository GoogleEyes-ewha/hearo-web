import React, { useEffect, useState } from "react";
import { useGetItem } from "../hooks/product";

import styled from "styled-components";
import Lottie from "lottie-react";
import speaker from "../assets/images/Speaker.png";

interface ProductDescriptionProps {
  itemId: string | undefined;
}

const getSpeech = (
  text: string | undefined,
  voices: SpeechSynthesisVoice[]
) => {
  const lang = "ko-KR";
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.lang = lang;

  // 미리 불러온 음성 데이터에서 한국어 음성 찾기
  const korVoice = voices.find(
    (voice) => voice.lang === lang || voice.lang === lang.replace("-", "_")
  );

  if (korVoice) {
    utterThis.voice = korVoice;
    window.speechSynthesis.speak(utterThis);
  } else {
    console.log("한국어 음성을 찾을 수 없습니다.");
  }
};

const ProductDescription = React.memo(({ itemId }: ProductDescriptionProps) => {
  const { data: details, isLoading, error } = useGetItem(itemId);
  console.log("details" + details?.result.name);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();

    // 음성 목록이 변경되면 다시 불러오기
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleSpeak = (text: string | undefined) => {
    getSpeech(text, voices);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter") {
      handleSpeak(details?.result.nutritionText);
    }
  }; 

  return (
    <Container>
      {/* <DescriptionContainer > */}
      {isLoading && details?.result == null ? (
        <LottieBox>
          <Lottie
            animationData={require("../assets/lottie/Lodding.json")}
            loop
            autoplay
            style={{ width: "200px", height: "200px" }}
          />
        </LottieBox>
      ) : (
        <>
          <DescriptionContainer>
            <InfoBox>
              <h2>{details?.result.name}</h2>
              <h3 style={{ color: "#4d4d4d" }}>{details?.result.itemInfo}</h3>
            </InfoBox>
            <FoodImg
              src={details?.result.detailImg}
              alt={`${details?.result.name}의 상세이미지`}
            />
          </DescriptionContainer>
          <Title>
            <u>Allergy Information</u>
          </Title>
          <AllergyInfo>
            {details?.result.allergy
              ? details.result.allergy
              : "No Allergy Found"}
          </AllergyInfo>
          <SpeakerContainer>
            <Title>
              <u>Nutrition Facts</u>
            </Title>
            <Speaker
              tabIndex={0}
              src={speaker}
              alt="speaker"
              onClick={() => handleSpeak(details?.result.nutritionText)}
              onKeyDown={handleKeyDown}
            />
          </SpeakerContainer>
          <NutritionImg
            src={details?.result.nutritionImg}
            alt={`${details?.result.name}의 영양성분표`}
          />
        </>
      )}
      {/* </DescriptionContainer> */}
    </Container>
  );
});

export default ProductDescription;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 115px;
  height: 100%;
  min-width: 770px;
`;
const LottieBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;
// 이름이랑 한줄소개
const InfoBox = styled.div`
  width: 100%;

  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  line-height: 56.16px;
`;
const Title = styled.h2`
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  line-height: 43.68px;
`;
const SpeakerContainer = styled.div`
  display: flex;
`;

const Speaker = styled.img`
  margin-top: 30px;
  margin-left: 15px;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;

const FoodImg = styled.img`
  display: flex;

  width: 400px;
  height: 300px;
`;
const NutritionImg = styled.img`
  display: flex;

  width: 700px;
  height: 700px;
  align-self: center;
`;
const AllergyInfo = styled.div`
  color: #4d4d4d;

  font-family: SUIT;
  font-weight: 400;
  font-size: 22px;
  line-height: 31.2px;
`;
