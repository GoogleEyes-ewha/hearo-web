import { useRecoilState } from "recoil";
import { userSettingsState } from "../../recoil/recoil";
import { usePostUserSettings } from "../../hooks/settings";
import styled from "styled-components";
import { useState } from "react";
import MaleImg from "../../assets/images/MALE_VOICE.png";
import FemaleImg from "../../assets/images/FEMALE_VOICE.png";
import { useNavigate } from "react-router-dom";

interface StepProps {
    onNext: (step: number) => void;
}

export const VoiceStep: React.FC<StepProps> = ({ onNext }) => {
    const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
    const [checkedValue, setCheckedValue] = useState('');
    const { mutate: postUserSettings, isLoading, isError } = usePostUserSettings();

    const navigate = useNavigate();
    
    const voiceType = [
        { value: 'MALE_VOICE', name: 'Male Voice' },
        { value: 'FEMALE_VOICE', name: 'Female Voice'},
    ];

    const handleCheckedValue = (value: string) => {
        if(value === checkedValue ){
            setCheckedValue('');
        }else{
            setCheckedValue(value);
        }
    }

    const handleSubmit = () =>{
        if(checkedValue != ''){
            setUserSettings({ ...userSettings, voiceType: checkedValue });
            console.log('userSettings'+userSettings);
            postUserSettings(userSettings);
            navigate('/main');
        }else{
            console.log('checkedValue is null!');
        }
    }

    return (
        <Container>
            <MainTitleBox>Please choose the type of disability</MainTitleBox>
            <CardContainer>
                {voiceType.map(voice => (
                <VoiceCard key = {voice.value} onClick = {() => handleCheckedValue(voice.value)} isSelected = {voice.value === checkedValue} >
                    <TypeText>{voice.name}</TypeText>
                    <CardImg src={voice.value === 'MALE_VOICE' ? MaleImg : FemaleImg}/>
                </VoiceCard>
                ))}
            </CardContainer>
            {checkedValue != '' && <NextBtn onClick = {handleSubmit}>Done! </NextBtn>}
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

const CardContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 56px 66px;
    justify-content: center;
    gap: 27px;
`

const VoiceCard = styled.div<{isSelected: boolean}>`
    display: flex;
    position: relative;
    width: 423px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: ${(props) => props.isSelected ? '#FFF2B2' : '#FFF'};
    justify-content: center;
    cursor: pointer;
`

const TypeText = styled.div`
    position: absolute;
    top: 80px;
    color: #000;

    text-align: center;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const CardImg = styled.img`
    width: 229px;
    height: 229px;
    position: absolute;
    bottom: 90px;
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