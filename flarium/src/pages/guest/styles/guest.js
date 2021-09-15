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
    font-size: 50px;

    &:first-letter {
        color: #1894FF;
    }
`;

export const FlightDisplaycontainer = styled.div`
    background-image: url('https://images.unsplash.com/photo-1547312667-da746e5a78c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
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