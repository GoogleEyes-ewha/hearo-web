import { styled } from "styled-components";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import { useGetItemAllReviews, useGetItemReviews } from "../hooks/product";
import SpeakerImg from "../assets/images/Speaker.png";
import { getTTSpeech } from "../api/tts";
import { useGetUserInfo, useGetUserSettings } from "../hooks/settings";

interface ProductReviewProps {
  itemId: string | undefined;
  data: any; // 이 부분에서 data 속성을 추가
}

const ProductReview = React.memo(
  ({ itemId, data: reviews }: ProductReviewProps) => {
    //const { data: reviews, isLoading, error } = useGetItemReviews(itemId);
    const {
      data: reviewList,
      isLoading: isLoading2,
      error: error2,
    } = useGetItemAllReviews(itemId);

    const {data: userInfo} = useGetUserSettings();

    console.log(userInfo);

    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(new Audio());
    const [playingText, setPlayingText] = useState<string | null>(null);
  
    // 컴포넌트 언마운트 시 오디오 정지
    useEffect(() => {
      return () => {
        audioRef.current.pause();
      };
    }, []);


    const handleSpeak = async (text: string) => {
      if (text === playingText && !audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.src = ""; // 오디오 소스 초기화
        setPlayingText(null); // 재생 중인 텍스트 상태 초기화
        return; // 함수 종료
      }else if (!audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.src = ""; // 오디오 재생 위치를 시작점으로 초기화
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      try {
        const audioUrl = await getTTSpeech(text, userInfo.result.voiceType); // getSpeech 함수 호출
        audioRef.current.src = audioUrl; // 오디오 소스 업데이트
        audioRef.current.load(); // 새 소스로 오디오 재로드
        audioRef.current.play();
        setPlayingText(text);
      } catch (error) {
        console.error('Speech play error:', error);
        alert("오류가 발생하였습니다.");
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>, text: string) => {
      if(event.key === 'Enter') {
        handleSpeak(text);
      }
    };

    const handlePreviousClick = () => {
      if (reviewList) {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0)); // 이전 2개 리뷰로 이동
      }
    };

    const handleNextClick = () => {
      if (reviewList) {
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 2, reviewList.result.reviewList.length - 2)
        ); // 다음 2개 리뷰로 이동
      }
    };

    // console.log('review' + JSON.stringify(reviews) );

    return (
      <Container>
        <ReviewContainer>
          {reviews?.result == null ? (
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
              <RefreshBtn>
                <RefreshIconBox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="77"
                    height="77"
                    viewBox="0 0 77 77"
                    fill="none"
                  >
                    <path
                      d="M41.0442 7.35635C41.6459 6.75488 42.4618 6.41699 43.3125 6.41699C44.1632 6.41699 44.9792 6.75488 45.5808 7.35635L55.2058 16.9813C55.8073 17.583 56.1452 18.3989 56.1452 19.2496C56.1452 20.1004 55.8073 20.9163 55.2058 21.5179L45.5808 31.1429C44.9757 31.7274 44.1653 32.0507 43.3241 32.0434C42.4828 32.0361 41.6782 31.6987 41.0833 31.1039C40.4885 30.509 40.151 29.7043 40.1437 28.8631C40.1364 28.0219 40.4598 27.2114 41.0442 26.6063L45.1926 22.458H40.1042C28.721 22.458 19.25 31.929 19.25 43.3121C19.25 54.6953 28.721 64.1663 40.1042 64.1663C51.4873 64.1663 60.9583 54.6953 60.9583 43.3121C60.9583 42.4612 61.2964 41.6452 61.898 41.0435C62.4997 40.4418 63.3158 40.1038 64.1667 40.1038C65.0176 40.1038 65.8336 40.4418 66.4353 41.0435C67.037 41.6452 67.375 42.4612 67.375 43.3121C67.375 58.2373 55.0293 70.583 40.1042 70.583C25.179 70.583 12.8333 58.2373 12.8333 43.3121C12.8333 28.387 25.179 16.0413 40.1042 16.0413H45.1926L41.0442 11.8929C40.4428 11.2913 40.1049 10.4754 40.1049 9.62464C40.1049 8.77391 40.4428 7.958 41.0442 7.35635Z"
                      fill="#0A1128"
                    />
                  </svg>
                </RefreshIconBox>
                Refresh summarized reviews
              </RefreshBtn>
              <ReviewTitleBox>
                <ReviewTitle>Positive review</ReviewTitle>
                <SpeakerImgBox
                  tabIndex={0}
                  src={SpeakerImg}
                  onClick={() => handleSpeak(reviews?.result.positiveSummary)}
                  onKeyDown={(event)=>handleKeyDown(event,reviews?.result.positiveSummary)}
                />
              </ReviewTitleBox>
              <ReviewBox>{reviews?.result.positiveSummary}</ReviewBox>
              <ReviewTitleBox>
                <ReviewTitle>Negative review</ReviewTitle>
                <SpeakerImgBox
                  tabIndex={0}
                  src={SpeakerImg}
                  onClick={() => handleSpeak(reviews?.result.negativeSummary)}
                  onKeyDown={(event)=>handleKeyDown(event,reviews?.result.negativeSummary)}
                />
              </ReviewTitleBox>
              <ReviewBox>{reviews?.result.negativeSummary}</ReviewBox>
            </>
          )}
        </ReviewContainer>
        <svg
          width="105%"
          style={{ marginLeft: "-2.5%" }}
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          viewBox="0 0 1062 12"
          fill="none"
        >
          <path
            d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM1050.67 6C1050.67 8.94552 1053.05 11.3333 1056 11.3333C1058.95 11.3333 1061.33 8.94552 1061.33 6C1061.33 3.05448 1058.95 0.666667 1056 0.666667C1053.05 0.666667 1050.67 3.05448 1050.67 6ZM6 7H1056V5H6V7Z"
            fill="#0A1128"
          />
        </svg>
        <ReviewTitle style={{ marginTop: "50px" }}>
          Customer reviews
        </ReviewTitle>
        <ReviewTextBox>
          <svg
            onClick={handlePreviousClick}
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="57"
            viewBox="0 0 33 57"
            fill="none"
          >
            <path
              d="M31.1173 1.1017C30.769 0.752479 30.3552 0.475407 29.8996 0.286359C29.444 0.0973107 28.9556 0 28.4623 0C27.9691 0 27.4807 0.0973107 27.0251 0.286359C26.5695 0.475407 26.1557 0.752479 25.8073 1.1017L0.877333 26.0317C0.599222 26.3092 0.378579 26.6389 0.228035 27.0018C0.0774906 27.3648 0 27.7538 0 28.1467C0 28.5396 0.0774906 28.9287 0.228035 29.2916C0.378579 29.6545 0.599222 29.9842 0.877333 30.2617L25.8073 55.1917C27.2773 56.6617 29.6473 56.6617 31.1173 55.1917C32.5873 53.7217 32.5873 51.3517 31.1173 49.8817L9.39733 28.1317L31.1473 6.3817C32.5873 4.9417 32.5873 2.5417 31.1173 1.1017Z"
              fill="#E8E8E8"
            />
          </svg>
          {reviewList && reviewList.result.reviewList.length > 0 ? (
            <>
              <DetailReviewText>
                {reviewList.result.reviewList[currentIndex]?.content}
              </DetailReviewText>
              {reviewList.result.reviewList[currentIndex + 1] && (
                <DetailReviewText>
                  {reviewList.result.reviewList[currentIndex + 1].content}
                </DetailReviewText>
              )}
            </>
          ) : (
            <DetailReviewText>No Reviews</DetailReviewText>
          )}
          <svg
            onClick={handleNextClick}
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="57"
            viewBox="0 0 33 57"
            fill="none"
          >
            <path
              d="M1.1063 55.1922C1.45464 55.5415 1.86846 55.8185 2.32405 56.0076C2.77963 56.1966 3.26805 56.2939 3.7613 56.2939C4.25456 56.2939 4.74296 56.1966 5.19855 56.0076C5.65414 55.8185 6.06796 55.5415 6.4163 55.1922L31.3463 30.2622C31.6244 29.9847 31.8451 29.655 31.9956 29.2921C32.1461 28.9292 32.2236 28.5401 32.2236 28.1472C32.2236 27.7543 32.1461 27.3653 31.9956 27.0024C31.8451 26.6394 31.6244 26.3098 31.3463 26.0322L6.4163 1.10224C4.9463 -0.367764 2.5763 -0.367764 1.1063 1.10224C-0.363701 2.57224 -0.363701 4.94224 1.1063 6.41224L22.8263 28.1622L1.0763 49.9122C-0.363697 51.3522 -0.363701 53.7522 1.1063 55.1922Z"
              fill="#E8E8E8"
            />
          </svg>
        </ReviewTextBox>
      </Container>
    );
  }
);

export default ProductReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 115px;
  height: 100%;
  min-width: 770px;
`;

const RefreshBtn = styled.button`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 113px;
  border-radius: 20px;
  border: 5px solid #0a1128;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  color: #0a1128;

  text-align: center;
  font-family: SUIT;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const RefreshIconBox = styled.div`
  display: flex;
  position: absolute;
  left: 40px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;
  margin-bottom: 70px;
`;

const ReviewTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  font-family: SUIT;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ReviewBox = styled.div`
  width: 100%;
  border: 1px solid #d8d8d8;
  min-height: 170px;

  color: #000;

  font-family: SUIT;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding: 20px 40px;
`;

const ReviewTextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 300px;
  justify-content: space-between;
  overflow: hidden;
`;

const SpeakerImgBox = styled.img`
  width: 42px;
  height: 39px;
  margin-left: 20px;
  cursor: pointer;
`;

const DetailReviewText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 163.26px;
  border-radius: 30px;
  border: 4px solid #e8e8e8;
  background: #fff;

  color: #767676;

  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: auto;
  padding: 20px;
`;

const LottieBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
