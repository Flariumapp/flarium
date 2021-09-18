import React from 'react';
<<<<<<< HEAD
import { Wrapper, ActionContainer, Container, Section, Text, TextLink } from './styles/footer';
=======
import { Wrapper, InnerWrapper, ActionContainer, Container, Section, Text, TextLink, Phantom } from './styles/footer';
>>>>>>> frontend-branch
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Divider } from 'antd';

const Footer = props => {
    return (
        <Container>
<<<<<<< HEAD
            <Wrapper>
                <Section>
                    <Text>
                        Contact us
                    </Text>
                    <Text>
                        Help center
                    </Text>
                    <Text>
                        Flight booking
                    </Text>
                    <Text>
                        Email notifications
                    </Text>
                </Section>
                <Divider type="vertical" />
                <Section>
                    <Text>
                        Address :-
                    </Text>
                    <Text>
                        A2-1401, Signature Global,
                        Solera, Gurugram Sector-107,
                        Haryana, India
                        122001
                    </Text>
                </Section>
                <Divider type="vertical" />
                <Section>
                    <Text>
                        Mail us at :-
                    </Text>
                    <TextLink>
                        flariumapp@gmail.com
                    </TextLink>
                    <Text>
                        Follow us on :-
                    </Text>
                    <ActionContainer>
                        <FaInstagram size={20} color={"#434343"} />
                        <FaFacebook size={20} color={"#434343"} />
                        <FaYoutube size={20} color={"#434343"} />
                        <FaLinkedin size={20} color={"#434343"} />
                    </ActionContainer>
                </Section>
=======
            <Phantom />
            <Wrapper>
                <InnerWrapper>
                    <Section>
                        <Text>
                            Contact us
                        </Text>
                        <Text>
                            Help center
                        </Text>
                        <Text>
                            Flight booking
                        </Text>
                        <Text>
                            Email notifications
                        </Text>
                    </Section>
                    <Divider type="vertical" />
                    <Section>
                        <Text>
                            Address :-
                        </Text>
                        <Text>
                            A2-1401, Signature Global,
                            Solera, Gurugram Sector-107,
                            Haryana, India
                            122001
                        </Text>
                    </Section>
                    <Divider type="vertical" />
                    <Section>
                        <Text>
                            Mail us at :-
                        </Text>
                        <TextLink>
                            flariumapp@gmail.com
                        </TextLink>
                        <Text>
                            Follow us on :-
                        </Text>
                        <div height={20} />
                        <ActionContainer>
                            <FaInstagram size={20} color={"#434343"} />
                            <FaFacebook size={20} color={"#434343"} />
                            <FaYoutube size={20} color={"#434343"} />
                            <FaLinkedin size={20} color={"#434343"} />
                        </ActionContainer>
                    </Section>
                </InnerWrapper>
>>>>>>> frontend-branch
            </Wrapper>
        </Container>
    );
}

export default Footer;