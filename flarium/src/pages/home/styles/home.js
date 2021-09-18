import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    margin: auto;
`;


export const Legend = styled.h1`
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    font-size: 60px;
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

export const SubLegend = styled.h2`
    text-transform: capitalize;
    color: #434343;
`;

export const FlightBookContainer = styled.div`
    width: 70%;
    margin: auto;
`;

export const FacilityContainer = styled.div`
    width: 70%;
    margin: auto;
`;

export const FacilityRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;