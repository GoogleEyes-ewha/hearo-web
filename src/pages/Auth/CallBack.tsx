import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Lottie from 'lottie-react';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');
    console.log(accessToken);
    console.log(refreshToken);

    if (accessToken && refreshToken) {
      Cookies.set('accessToken', accessToken!); 
      Cookies.set('refreshToken', refreshToken!); 

      console.log(Cookies.get('accessToken'));
      console.log(refreshToken);

      // 메인 페이지로 리디렉션
      navigate('/main');
    }else if((Cookies.get('accessToken') && Cookies.get('refreshToken'))){
      navigate('/main');
    }else {
      // 토큰이 없는 경우 로그인 페이지로 리디렉션
      navigate('/login');
      alert('유효하지 않은 정보입니다. 잠시 후 다시 시도해주세요.');
    }
  }, [navigate]);

  return (
  <LottieBox>
    <Lottie
        animationData={require("../../assets/lottie/Lodding.json")}
        loop
        autoplay
        style={{ width: "200px", height: "200px" }}
    />
  </LottieBox>);
};

export default Callback;

const LottieBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
