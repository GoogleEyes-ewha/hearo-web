import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getColors } from "../../assets/styles/colors";
import { colorBlindModeState } from "../../recoil/recoil";
import styled from "styled-components";
import GoogleLogo from "../../assets/images/googleLogo.png";
import { useRecoilState } from 'recoil';
import { isModalOpen } from '../../recoil/recoil';
import LoginModal from "../../components/Login/LoginModal";


export default function Login() {
    const colorBlindMode = useRecoilValue(colorBlindModeState);
    const colors = getColors(colorBlindMode);
    const [isOpen, setIsOpen] = useRecoilState(isModalOpen);

    // 단축키 
    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === 'Enter' && event.ctrlKey) {
          setIsOpen(true);
      }
    };

    // event handler 등록 
    useEffect(() => {
      document.addEventListener('keydown',handleKeyDown);
      return () => {
          document.removeEventListener('keydown',handleKeyDown);
      };
    },[]);

    return(
      <Container>
        <TitleBox>HEARO</TitleBox>
        <SubTitleBox>will be your hero</SubTitleBox>
        <GoogleSignUpBox onClick={() => setIsOpen(true)}>
          <LogoImgBox src={GoogleLogo}/>
          <SignUpText>Sign up with Google</SignUpText>
        </GoogleSignUpBox>
        <LoginModal/>
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #FFF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TitleBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;


  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: SUIT;
  font-size: 250px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 50px;
`

const SubTitleBox = styled.div`
    text-align: center;
    font-family: SUIT;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 5px;
`

const GoogleSignUpBox = styled.div`
  display: inline-flex;
  padding: 27px 109px 26px 59px;
  margin-top: 84px;
  align-items: center;
  gap: 95px;
  border-radius: 4.838px;
  background: #FFF;
  box-shadow: 0px 2.419px 2.419px 0px rgba(0, 0, 0, 0.17), 0px 0px 2.419px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`

const LogoImgBox = styled.img`
  width: 50px;
  height: 50px;
`

const SignUpText = styled.div`
  display: flex;
  width: 380px;
  color: rgba(0, 0, 0, 0.54);
  justify-content: center;

  text-align: center;
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`