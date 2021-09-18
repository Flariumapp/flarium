import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    z-index: 300;
`;

export const BrandContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Brand = styled.h2`
    text-transform: capitalize;
    color: #707070;
    margin: 0;
`;

export const LogoContainer = styled.div`
    width: 35px;
    height: 35px;
    overflow: hidden;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const SearchContainer = styled.div`
    /* width: 50%; */
    flex-grow: 1;

    @media(max-width: 872px) {
        display: none;
        width: 0;    
    }
`;

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #e3e3e3;
    border-radius: 30px;
    padding: 7px 20px;
    align-items: center;
`;

export const SearchInput = styled.input`
    border: 0;
    color: #707070;
    background-color: #e3e3e3;

    &:focus {
        outline: none;
    }
`;

export const NavContainer = styled.div`
    /* width: 40%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 872px) {
          
    }
`;

export const NavItem = styled.div`
    margin: 0px 10px;
`;

export const Nav = styled(NavLink)`
    color: ${ ({ isActive }) => isActive ? "#1894FF" : "#707070" };
`;

export const Display = styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 100%;
    /* border: 0.2px solid #ccc; */
    background-color: #eee;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;