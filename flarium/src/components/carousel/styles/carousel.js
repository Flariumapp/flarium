import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 400px;
`;

export const Display = styled.div`
    height: 350px;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    background-color: #707070;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const IndicatorContainer = styled.div`
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: fit-content;
`;

export const Indicator = styled.div`
    cursor: pointer;
    border-radius: 100%;
    height: 10px;
    width: 10px;
    border: ${ ({ active }) => !active ? "0.2px solid #ccc" : "0px solid #1894FF" };
    background-color: ${ ({ active }) => active ? "#1894ff" : "#fff" };
    margin: 0 5px;
`;