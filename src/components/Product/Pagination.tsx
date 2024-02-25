import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setPage: (page:number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {
    
    const goToPreviousPage = () => {
        setPage(Math.max(1,currentPage-1));
    };

    const goToNextPage = () => {
        setPage(Math.min(totalPages,currentPage+1));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.ctrlKey && event.key === 'ArrowLeft') {
            goToPreviousPage();
        }
        else if(event.ctrlKey && event.key === 'ArrowRight') {
            goToNextPage();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })
    
    return (
        <Nav>
            <ArrowLeft onClick={goToPreviousPage} disabled={currentPage===1}>
                <ArrowBack style={{ color: '#fff' ,width: '30px' ,height: '30px'}}/>
            </ArrowLeft>
            {Array.from({length: totalPages},(_,index) => (
                <PageNumber
                    key={index}
                    active={currentPage === index + 1}
                    onClick={() => setPage(index + 1)}
                >
                    {index + 1}
                </PageNumber>
            ))}
            <ArrowRight onClick={goToNextPage} disabled={currentPage===totalPages}>
                <ArrowForward style={{ color: '#fff' ,width: '30px' ,height: '30px'}}/>
            </ArrowRight>
        </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
`;

const PageNumber = styled.button<{ active: boolean }>`
    
    font-family: SUIT;
    font-size: 16px;
    font-weight: bold;

    border-radius: 20px;
    margin: 0 5px;
    padding: 5px 10px;
    background-color: ${(props) => (props.active ? '#007bff' : '#fff')};
    color: ${(props) => (props.active ? '#fff' : '#000')};
    cursor: pointer;

    &:hover {
        background-color: #007bff;
        color: #fff;
    }
`;

const ArrowLeft = styled.button`
    border-radius: 15px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    align-items: center;   
    margin-right: 10px;
    cursor: pointer;

`
const ArrowRight = styled.button`
    border-radius: 15px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    align-items: center;   
    margin-left: 5px;
    cursor: pointer;

`

export default Pagination;