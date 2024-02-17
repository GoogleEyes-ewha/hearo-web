import React, { useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import ProductDetail from '../components/ProductDetail';

export default function Review(){
    return (
        <Container>
            <Header/>
            <ProductDetail/>
        </Container>
    );
};



const Container = styled.div`
    display: flex;
    width: 100%;
`