import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import ProductDetail from '../components/ProductDetail';
import ProductDescription from '../components/ProductDescription';
import ProductReview from '../components/ProductReview';
import {detailState} from '../recoil/recoil';
import { useRecoilState } from 'recoil';

export default function Review(){

    const [detailNum, setDetailNum] = useRecoilState<number>(detailState);
    const handleInfo = (value: number) => {
        if(value !=detailNum){
            setDetailNum(value);
        }
    }
    return (
        <Container>
            <Header/>
            <ProductDetail/>
            <DetailBox>
                <InfoHeader>
                    <InfoBtn isSelected = {detailNum === 1} onClick = {() => handleInfo(1)}>Product Description</InfoBtn>
                    <InfoBtn isSelected = {detailNum === 2} onClick = {() => handleInfo(2)}>Review</InfoBtn>
                </InfoHeader>
                {detailNum === 1 ? <ProductDescription/> : <ProductReview/>}
            </DetailBox>
        </Container>
    );
};



const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const DetailBox = styled.div`
    display: flex;
    margin: 0 101px 139px 101px;
    min-width: 1000px;   
    height: 1272px;
    background-color: #fff;
    border-radius: 10px;
`

const InfoHeader = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #d9d9d9;
`
const InfoBtn = styled.button<{isSelected: boolean}>`
    display: flex;
    height: 100px;
    width: 50%;
    cursor: pointer;
    border: none;
    border-radius: 10px 10px 0 0;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.isSelected ? '#fff' : '#d9d9d9'};

    color: ${(props) => props.isSelected ? '#000' : '#767676'};

    text-align: center;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`