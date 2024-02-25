import { useRecoilState } from "recoil";
import { userSettingsState } from "../../recoil/recoil";
import { usePostUserSettings } from "../../hooks/settings";
import styled from "styled-components";
import { useState } from "react";

interface StepProps {
    onNext: (step: number) => void;
}

export const DisabilityStep: React.FC<StepProps> = ({ onNext }) => {
    const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
    const [checkedValue, setCheckedValue] = useState<number>(-1);
    
    const disabilityTypes = [
        { type: "01", name: "Visual Impairment", value: 0, },
        { type: "02", name: "Blindness", value: 1, },
        { type: "03", name: "Peripheral Vision Loss", value: 2, },
        { type: "04", name: "Color Vision Deficiency", value: 3, }
      ];
    const handleDisabilityTypeChange = (newType: number) => {
        setUserSettings({ ...userSettings, disabilityType: newType });
    };

    const handleCheckedValue = (value: number) => {
        if(value === checkedValue ){
            setCheckedValue(-1);
        }else{
            setCheckedValue(value);
        }
    }

    const handleSubmit = () =>{
        if(checkedValue != -1){
            setUserSettings({ ...userSettings, disabilityType: checkedValue });
            onNext(2);
        }else{
            console.log('checkedValue is null!');
        }
    }

    return (
        <Container>
            <MainTitleBox>Please choose the type of disability</MainTitleBox>
            <CardContainer>
                {disabilityTypes.map(disability => (
                <DisabilityCard key = {disability.type} onClick = {() => handleCheckedValue(disability.value)} isSelected = {disability.value === checkedValue} >
                    <NumberText>{disability.type}</NumberText>
                    <TypeText>{disability.name}</TypeText>
                </DisabilityCard>
                ))}
            </CardContainer>
            {checkedValue != -1 && <NextBtn onClick = {handleSubmit}>Next Step  {' >'} </NextBtn>}
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
    width: 100%;
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

const CardContainer = styled.div`
    display: flex;
    margin: 56px 66px;
    justify-content: center;
    gap: 20px;
`

const DisabilityCard = styled.div<{isSelected: boolean}>`
    display: flex;
    position: relative;
    width: 307px;
    height: 500px;
    border-radius: 10px;
    background: ${(props) => props.isSelected ? '#FFF2B2' : '#FFF'};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    cursor: pointer;
`

const NumberText = styled.div`
    position: absolute;
    top: 59px;

    font-variant-numeric: lining-nums proportional-nums;
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #0A1128;
    font-family: Raleway;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 96px; /* 96% */
`
const TypeText = styled.div`
    position: absolute;
    bottom: 68px;
    color: #000;

    text-align: center;
    font-family: Poppins;
    font-size: 40px;
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