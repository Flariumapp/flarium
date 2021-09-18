import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    /* height: 68vh; */
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CarouselContainer = styled.div`
    width: 60%;
    padding: 0px 50px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const FormContainer = styled.div`
    margin-top: 70px;
    width: 30%;
    padding: 20px;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    width: 300px;
    margin: auto;
`;

export const ForgotPasswordContainer = styled.div`
    justify-content: flex-end;
    margin: 10px 0px;
    text-align: end;
`;

export const ForgotPassword = styled.p`
    cursor: pointer;
    text-transform: capitalize;
    color: #1894FF;
    margin: 0;
`;