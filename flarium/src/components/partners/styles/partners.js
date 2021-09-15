import styled from 'styled-components/macro';

export const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 40px;
`;

export const Wrapper = styled.div`
    margin: auto;
    width: 80%;
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Display = styled.div`
    height: 80px;
    width: 100px;
    overflow: hidden;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

export const Legend = styled.h3`
    cursor: pointer;
    color: #434343;
    font-size: 20px;
    margin: 10px;
`;