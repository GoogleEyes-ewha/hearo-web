import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isModalOpen } from '../../recoil/recoil';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function LoginModal() {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const [activeForm, setActiveForm] = useState<'login' | 'signup'>('login');

  if (!isOpen) return null;

  return (
    <Container>
        <FormBox>
            <ToggleBox>
                <ToggleTitle>
                    <ToggleBtn onClick={() => setActiveForm('login')} isClicked = {activeForm === 'login'}>
                        LOGIN
                    </ToggleBtn>
                    <ToggleBtn onClick={() => setActiveForm('signup')} isClicked = {activeForm === 'signup'}>
                        SIGN UP
                    </ToggleBtn>
                </ToggleTitle>
                <FormContainer>
                    {activeForm === 'login' ? <LoginForm /> : <SignupForm />}
                </FormContainer>
            </ToggleBox>
        </FormBox>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    position : fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    color: black;
`

const FormBox = styled.div`
    display: flex;
    height: 700px;
    width: 500px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 10px;
`

const ToggleBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    margin: 40px 20px;
    justify-content: center;
`

const ToggleTitle = styled.div`
    position: absolute;
    width: 100%;
    top: 50px;
    display: flex;
    justify-content: center;
    gap: 50px;
`

const ToggleBtn = styled.button<{isClicked: boolean}>`
    display: flex;
    border: none;
    background-color: #f9f9f9;
    color: #434343;

    text-align: center;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: ${(props)=> (props.isClicked ? 600 : 400)};
    line-height: normal;
`

const FormContainer = styled.div`
    display: flex;
    position : relative;
    width: 100%;
    align-items: center;
    justify-content: center;
`