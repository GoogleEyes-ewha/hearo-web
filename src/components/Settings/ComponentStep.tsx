import { useRecoilState } from "recoil";
import { userSettingsState } from "../../recoil/recoil";
import { usePostUserComponentSettings, usePostUserSettings } from "../../hooks/settings";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ComponentType } from "../../types";
import { useNavigate } from "react-router";
import { postUserComponentSettings } from "../../api/settings";

interface StepProps {
    onNext: (step: number) => void;
}

export const ComponentStep: React.FC<StepProps> = ({ onNext }) => {
    const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
    const [checkedValue, setCheckedValue] = useState<ComponentType>(ComponentType.DEFAULT);
    const navigate = useNavigate();
    const { mutate: postUserComponentSettings, isLoading, isError } = usePostUserComponentSettings();

    useEffect(() => {
        // userSettings.componentType 비어있지 않은 경우에만 postUserSettings 호출
        if(userSettings.componentType !== '') {
          postUserComponentSettings(userSettings);
          navigate('/main');
        }
      }, [userSettings.componentType]);
    
    const disabilityTypes = [
        { type: "6 items", name: "", value: ComponentType.SIX, },
        { type: "3 items", name: "", value: ComponentType.THREE, },
        { type: "1 items", name: "", value: ComponentType.ONE, },
      ];

    const handleCheckedValue = (value: ComponentType) => {
        if(value === checkedValue ){
            setCheckedValue(ComponentType.DEFAULT);
        }else{
            setCheckedValue(value);
        }
    }

    const handleSubmit = () =>{
        if(checkedValue != ComponentType.DEFAULT){
            setUserSettings({ ...userSettings, componentType: checkedValue });
        }else{
            console.log('checkedValue is null!');
        }
    }

    return (
        <Container>
            <MainTitleBox>Please choose items per page</MainTitleBox>
            <CardContainer>
                {disabilityTypes.map(disability => (
                <DisabilityCard key = {disability.type} onClick = {() => handleCheckedValue(disability.value)} isSelected = {disability.value === checkedValue} >
                    <NumberText>{disability.type}</NumberText>
                    <TypeText>{disability.name}</TypeText>
                </DisabilityCard>
                ))}
            </CardContainer>
            {checkedValue != ComponentType.DEFAULT && <NextBtn onClick = {handleSubmit}>Next Step  {' >'} </NextBtn>}
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