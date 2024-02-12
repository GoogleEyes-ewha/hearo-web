import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isSettingModalOpen } from '../../recoil/recoil';
import styled from 'styled-components';
import CancleImg from '../../assets/images/cancleX.png';
import { useNavigate } from 'react-router-dom';
import { useGetUserSettings } from '../../hooks/settings';

export default function SettingModal() {
  useGetUserSettings();
  const [isOpen, setIsOpen] = useRecoilState(isSettingModalOpen);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const handleClick = () => {
    navigate('/settings');
  };

  return (
    <Container>
        <FormBox>
            <CloseButton onClick={closeModal}/>
            <TextBox>Navigate to Custom Hearo Options?</TextBox>
            <GoBox onClick={handleClick}>Go</GoBox>
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
    flex-direction: column;
    gap: 60px;
    align-items: center;
    position: relative;
    height: 389px;
    width: 749px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 10px;
`

const CloseButton = styled.button`
    position: absolute;
    width: 45px;
    height: 45px;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
    background-image: url(${CancleImg});
`;

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 120px;
    color: #434343;

    text-align: center;
    font-family: SUIT;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const GoBox = styled.div`
    width: 283px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #767676;
    cursor: pointer;

    color: #FFF;

    text-align: center;
    font-family: Roboto;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`