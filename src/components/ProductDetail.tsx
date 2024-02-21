import React, { useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { useGetItem } from '../hooks/product';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';

export default function ProductDetail(){
    const { itemId } = useParams();
    console.log('itemId' + itemId);
    const { data: data, isLoading, error } = useGetItem(itemId);

    console.log(data);
    if (error) return <div>An error occurred</div>;


    return (
    <Container>
        {isLoading ? (
            <LottieBox>
                <Lottie
                    animationData={require('../assets/lottie/Lodding.json')}
                    loop
                    autoplay
                    style={{ width: '200px', height: '200px' }}
                />
            </LottieBox>
        ):(
            <>
                <FoodImg src={data?.result.itemImg}></FoodImg>
                <InfoBox>
                    <FoodName>{data?.result.name}</FoodName>
                    <FoodInfo>{data?.result.itemInfo}</FoodInfo>
                    <FoodPrice>{data?.result.price.toLocaleString()} won</FoodPrice>
                    <div style={{display: 'flex', gap: '31px'}}>
                        <CartBtn>ADD TO CART </CartBtn>
                        <CartBtn style={{backgroundColor: '#0A1128', color: '#fff'}}>BUY NOW</CartBtn>
                    </div>
                </InfoBox>
            </>
        )}
    </Container>
    );
};



const Container = styled.div`
    display: flex;
    min-width: 1000px;   
    height: 489px;
    margin: 139px 101px 50px 101px;
    background-color: #fff;
    border-radius: 10px;
`

const LottieBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FoodImg = styled.img`
    display: flex;
    width: 407px;
    height: 407px;
    margin: 41px;
`

const InfoBox = styled.div`
    display: flex;
    position: relative;
    width: calc(100% - 489px);
    flex-direction: column;
    margin-top: 75px;
`

const FoodName = styled.div`
    color: #000;

    font-family: SUIT;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const FoodInfo = styled.div`
    margin-top: 16px;
    color: #767676;

    font-family: SUIT;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const FoodPrice = styled.div`
    margin-top: 33px;
    margin-bottom: 69px;
    color: #000;

    font-family: SUIT;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const CartBtn = styled.button`
    display: flex;
    width: 213px;
    height: 69px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #0A1128;
    background-color: #fff;
    cursor: pointer;

    color: #0A1128;

    font-family: SUIT;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`