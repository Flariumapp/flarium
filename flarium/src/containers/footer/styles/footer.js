import styled from 'styled-components/macro';

export const Container = styled.div`
`;

export const Phantom = styled.div`
    display: block;
    width: 100%;
    padding: 20px;
    height: 100px;
`;

export const Wrapper = styled.div`
    width: 100%;
    justify-content: center;
    background-color: #f0f0f0;
    align-items: center;
    border-top: 0.5px solid #ccc;
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
    margin: auto;
    padding: 30px 0px;
`;

export const Section = styled.div`
    width: 40%;
    height: 100%;
    padding: 20px;
`;

export const Text = styled.p`
    cursor: pointer;
    margin: 0;
    color: #434343;
`;

export const TextLink = styled.p`
    cursor: pointer;
    color: #1894FF;
    margin: 0;
`;

export const ActionContainer = styled.div`
    width: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;