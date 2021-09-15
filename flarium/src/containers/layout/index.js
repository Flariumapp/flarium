import React from 'react';
import { Container, BodySection, FooterSection, HeaderSection } from './styles/layout';
import Header from '../header';
import Footer from '../footer';
import Body from '../body';

const Layout = props => {
    return (
        <Container>
            <HeaderSection>
                <Header />
            </HeaderSection>
            <BodySection>
                <Body />
            </BodySection>
            <FooterSection>
                <Footer />
            </FooterSection>
        </Container>
    );
}

export default Layout;