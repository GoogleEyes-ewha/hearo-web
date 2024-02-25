import React from "react";
import styled from "styled-components";
import MicIcon from '@mui/icons-material/Mic';
import { useSetRecoilState } from "recoil";
import { voiceSearchState } from "../../recoil/recoil";

interface ButtonProps {
  width: string;
  height: string;
}

const VoiceSearchButton: React.FC<ButtonProps> = ({ width, height }) => {
  const setKeyword = useSetRecoilState(voiceSearchState);

  const startVoiceRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "ko-KR";
    recognition.interimResults = false;

    recognition.start(); // 음성 인식 시작
    console.log("음성 인식을 시작합니다.");

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript; // 인식된 텍스트
      setKeyword(transcript);
      console.log(`인식된 텍스트: ${transcript}`);
      //navigate(`/item?keyword=${encodeURIComponent(transcript)}`);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.log("음성 인식 에러", event.error);
    };
  };

  return (
    <StyledButton onClick={startVoiceRecognition} width={width} height={height}>
      <MicIcon />
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  &:hover {
    background-color: #eee;
    border: 5px solid #fdfb67;
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default VoiceSearchButton;
