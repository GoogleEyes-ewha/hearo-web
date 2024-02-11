import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header(){

    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <Container>
            <LogoImgBox onClick={handleClick}/>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex; 
    justify-content: space-between;
    padding: 22px 39.784px 22.583px 51px;
    align-items: center;
    background-color: red;
    width: 100%;
    height: 35.4px;
`

const LogoImgBox = styled.div`
    width: 165px;
    height: 33px;
    background: url(${Logo});
    cursor: pointer;
`