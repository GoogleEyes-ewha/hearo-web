import React, { useCallback, useEffect, useState } from 'react';

import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import ProductDescription from '../components/ProductDescription';
import ProductReview from '../components/ProductReview';
import {detailState} from '../recoil/recoil';
import { useRecoilState } from 'recoil';
import { useGetItemReviews } from '../hooks/product';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Detail(){
    const { itemId } = useParams();
    const [detailNum, setDetailNum] = useRecoilState<number>(detailState);
    const handleInfo = useCallback((value: number) => {
        if (value !== detailNum) {
          setDetailNum(value);
        }
    }, [detailNum, setDetailNum]);
    

    const { data, isLoading, error } = useGetItemReviews(itemId); // 리뷰
    console.log('itekms' + JSON.stringify(data));
    
    return (
        <Container>
            <Header/>
            <ProductDetail/>
            <DetailBox>
                <InfoHeader>
                    <InfoBtn isSelected = {detailNum === 1} onClick = {() => handleInfo(1)}>Product Description</InfoBtn>
                    <InfoBtn isSelected = {detailNum === 2} onClick = {() => handleInfo(2)}>Review</InfoBtn>
                </InfoHeader>
                {detailNum === 1 ? <ProductDescription itemId={itemId}/> : <ProductReview itemId={itemId}/>}
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
    flex-direction: column;
    margin: 0 101px 139px 101px;
    min-width: 1000px;   
    height: 1500px;
    background-color: #fff;
    border-radius: 10px;
`

const InfoHeader = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #d9d9d9;
    border-radius: 10px;
`
const InfoBtn = styled.button<{isSelected: boolean}>`
    display: flex;
    width: 100%;
    height: 100px;
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