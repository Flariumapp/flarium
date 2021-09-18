import styled from 'styled-components/macro';

export const Container = styled.div`
    margin: 20px 0px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 40px;
    margin: auto;
    border-radius: 10px;
    border: 0.2px solid #ccc;
    justify-content: space-between;
`;

export const Section = styled.div`

`;

export const Display = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 0.5px solid #ccc;
    overflow: hidden;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Airport = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    text-transform: capitalize;
`;

export const Text = styled.p`
    text-transform: capitalize;
    font-size: 16px;
    margin: 0;
`;

export const Status = styled.p`
    color: ${({ color }) => color };
    font-size: 16px;
    margin: 0;
    text-transform: capitalize;
`;