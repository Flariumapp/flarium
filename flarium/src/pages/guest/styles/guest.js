import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    margin: auto;
`;

export const FeatureContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px auto;
`;

export const Legend = styled.h1`
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    font-size: 60px;
/* 
    &:first-letter {
        color: #1894FF;
    } */
`;

export const FlightDisplaycontainer = styled.div`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images5.alphacoders.com/863/863248.jpg');
    background-repeat: no-repeat;
    background-size: 100% 1000px;
    background-position: center;
    background-color: rgba(0, 0, 0);
`;

export const FlightDisplayWrapper = styled.div`
    width: 70%;
    margin: auto;
    padding: 20px;
`;

export const PartnerContainer = styled.div`
    width: 70%;
    margin: auto;
`;