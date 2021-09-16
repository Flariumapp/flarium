import React from 'react';
import { Brand, BrandContainer, Container, Nav, NavContainer, NavItem, Search, SearchInput, SearchContainer, LogoContainer, Logo } from './styles/header';
import { FiSearch } from 'react-icons/fi';
import logo from '../../images/app-logo/logo.png';
import { useSelector } from 'react-redux';

const Header = props => {
    // const token = useSelector(state => state.ath.token);
    const isAuth = true;

    const navigations = isAuth ? (
        <NavContainer>
            <NavItem>
                <Nav to={'/'} activeStyle={{ color: "#1894FF" }} exact>Check Flights</Nav>
            </NavItem>
            <NavItem>
                <Nav to={'/shop'} activeStyle={{ color: "#1894FF" }} exact>Shops & Utilities</Nav>
            </NavItem>
            <NavItem>
                <Nav to={'/meal'} activeStyle={{ color: "#1894FF" }} exact>Meals & Resturants</Nav>
            </NavItem>
            <NavItem>
                <Nav to={'/help'} activeStyle={{ color: "#1894FF" }} exact>Help Center</Nav>
            </NavItem>
        </NavContainer>
    ) : (
        <NavContainer>
            <NavItem>
                    <Nav to={'/'} activeStyle={{ color: "#1894FF" }} exact>Check Flights</Nav>
            </NavItem>
            <NavItem>
                <Nav to={'/airport-view'} activeStyle={{ color: "#1894FF" }} exact>Airport View</Nav>
            </NavItem>
            <NavItem>
                <Nav to={'/login'} activeStyle={{ color: "#1894FF" }} exact>Login</Nav>
            </NavItem>
            <NavItem>
                <Nav to={'/sign-up'} activeStyle={{ color: "#1894FF" }} exact>Signup</Nav>
            </NavItem>
        </NavContainer>
    );

    return (
        <Container>
            <BrandContainer>
                <LogoContainer>
                    <Logo src={logo} alt="Flarium" />
                </LogoContainer>
                <div style={{ width: 10 }}></div>
                <Brand>
                    Flarium
                </Brand>
            </BrandContainer>
            <div style={{ width: 20 }} />
            <SearchContainer>
                {isAuth && <Search>
                    <FiSearch color={"#707070"} size={20} />
                    <div style={{ width: 5 }}></div>
                    <SearchInput placeholder="Search Flights" />
                </Search>}
            </SearchContainer>
            <div style={{ width: 10 }} />
            {navigations}
        </Container>
    );
}

export default Header;