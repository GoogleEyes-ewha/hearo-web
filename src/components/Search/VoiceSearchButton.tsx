import React from 'react';
import styled from 'styled-components';
import MicIcon from '@mui/icons-material/Mic';
// 음성 인식 관련 라이브러리 import

const VoiceSearchButton: React.FC= () => {
    
    const startVoiceRecognition = () => {
        // 음성 인식 로직 구현
        console.log('음성 인식을 시작합니다.');
    };

    return (
        <StyledButton onClick={startVoiceRecognition}>
            <MicIcon />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff; /* White background */
    color: #000; /* Black color for the icon */
    border: none;
    border-radius: 50%; /* Makes the button round */
    cursor: pointer;
    padding: 10px; /* Adjust the padding to size the button */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25); /* Adds a subtle shadow */

    &:hover {
        background-color: #eee; /* Lighter background on hover */
    }

    svg {
        width: 24px; /* Sets the size of the icon */
        height: 24px; /* Sets the size of the icon */
  }
`

export default VoiceSearchButton;