import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setPage: (page:number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {
    return (
        <Nav>
            {Array.from({length: totalPages},(_,index) => (
                <PageNumber
                    key={index}
                    active={currentPage === index + 1}
                    onClick={() => setPage(index + 1)}
                >
                    {index + 1}
                </PageNumber>
            ))}
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
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: ${(props) => (props.active ? '#007bff' : '#fff')};
    color: ${(props) => (props.active ? '#fff' : '#000')};
    cursor: pointer;

    &:hover {
        background-color: #007bff;
        color: #fff;
    }
`;

export default Pagination;