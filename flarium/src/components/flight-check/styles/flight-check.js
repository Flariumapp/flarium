import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 70vh;
`;

export const Section = styled.div`
    width: ${ ({ width }) => width + '%' };
`;

export const FormContainer = styled.div`
    /* width: 250px; */
    padding: 20px;
`;

export const Form = styled.form``;

export const Legend = styled.h3`
    cursor: pointer;
    font-size: 20px;
    color: #f0f0f0;
    margin: 10px;
`;

export const InputContainer = styled.div`
    margin: 15px 0px;
`;

export const ButtonContainer = styled.div`
    margin: 15px 0px;
`;


export const NextFlightsContainer = styled.div`
    
`;


export const FlightBox = styled.div`
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    text-align: center;
`;

export const FlightDisplay = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 10px;
    border: 0.5px solid #eee;
    overflow: hidden;
    background-color: #fff;
`;

export const FlightLogo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const FlightLocation = styled.p`
    margin-top: 5px;
    font-size: 15px;
    color: #fff;
`;