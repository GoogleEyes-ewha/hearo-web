import { useRecoilState } from "recoil";
import { userSettingsState } from "../../recoil/recoil";
import { usePostUserSettings } from "../../hooks/settings";
import styled from "styled-components";
import { useState } from "react";

interface StepProps {
    onNext: (step: number) => void;
}

export const FontSizeStep: React.FC<StepProps> = ({ onNext }) => {
    const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
    const [fontSize, setFontSize] = useState<number>(userSettings.fontSize || 20);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(Number(event.target.value));
    }

    const steps = 17; // 슬라이더의 스텝 수
    const stepWidth = 100 / (steps - 1);

    // 세로선을 배치하기 위한 함수
    const renderStepLines = (steps: number, stepWidth: number) => {
        return Array.from({ length: steps }, (_, i) => (
        <StepLine
            key={i}
            style={{ left: `${stepWidth * i}%` }}
        />
        ));
    }; 

    const handleSubmit = () => {
        if(fontSize >= 20 && fontSize <= 52){
            setUserSettings({ ...userSettings, fontSize: fontSize });
            onNext(3);
        }else{
            console.log('Font size is out of range!');
        }
    }

    return (
        <Container>
            <MainTitleBox>Please set the font size</MainTitleBox>
            <SubContainer>
                <FontSizeDisplay fontSize = {fontSize} >Hello, we’re hearo!
                </FontSizeDisplay>
                <SubLeftText>A</SubLeftText>
                <SubRightText>A</SubRightText>
                <SliderTrack>
                    {renderStepLines(steps, stepWidth)}
                </SliderTrack>
                <Slider 
                    type="range" 
                    min="20" 
                    max="52" 
                    value={fontSize} 
                    step="2"
                    onChange={handleChange} 
                />
            </SubContainer>
            
            <NextBtn onClick = {handleSubmit}>Next Step  {' >'} </NextBtn>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`

const MainTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 153px;
    color: #FFF2B2;

    text-align: center;
    font-family: Raleway;
    font-size: 55px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 500px;
    align-items: center;
    
    margin: 0 66px;

    border-radius: 10px;
    background: #FFF;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const SubLeftText = styled.div`
    font-size: 20px;
    position: absolute;
    bottom: 165px;
    left: calc(10% - 30px);
`

const SubRightText = styled.div`
    font-size: 52px;
    position: absolute;
    bottom: 149px;
    right: calc(10% - 70px);
`

const Slider = styled.input.attrs({ type: 'range' })`
  /* -webkit-appearance: none; */
  position: absolute;
  bottom: 175px;
  left: calc(10% - 15px);
  width: calc(80% + 30px);
  background: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    stroke-width: 1px;
    stroke: rgba(68, 68, 102, 0.27);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50%;
    background: #FFF;
    margin-top: -12px;
    cursor: pointer;
  }

  &::-moz-range-track {
    width: 100%;
    height: 5px;
    background: #767676;
    border-radius: 0;
  }

  &::-moz-range-thumb {
    border: 1px solid #000;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #FFF;
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: 5px;
    background: #767676;
    border-radius: 0;
  }

  &::-ms-thumb {
    border: 1px solid #000;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #FFF;
    cursor: pointer;
  }
`;


const FontSizeDisplay = styled.div<{fontSize: number}>`
    display: flex;
    position: absolute;
    height: 100px;
    width: 734px;
    margin: 0 auto;
    top: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #D8D8D8;

    font-size: ${props => props.fontSize}px;
    color: #000;

    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const NextBtn = styled.button`
    position: fixed;
    right: 84px;
    bottom: 50px;
    cursor: pointer;
    width: 139px;
    height: 35.417px;
    border-radius: 27px;
    background: #FFF2B2;

    color: #0A1128;

    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.46px;
`

const StepLine = styled.div`
  margin-top: -16px;
  position: absolute;
  width: 5px;
  height: 34px;
  background-color: #767676;
`;

// SliderTrack 컴포넌트 정의
const SliderTrack = styled.div`
  display: flex;
  position: absolute;
  bottom: 175px;
  width: 80%;
  height: 5px;
  background: #767676;
`;