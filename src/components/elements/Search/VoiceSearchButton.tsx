import React from 'react';
// 음성 인식 관련 라이브러리 import

const VoiceSearchButton: React.FC= () => {
    
    const startVoiceRecognition = () => {
        // 음성 인식 로직 구현
        console.log('음성 인식을 시작합니다.');
    };

    return (
        <button onClick={startVoiceRecognition}>마이크</button>
    );

};

export default VoiceSearchButton;