import React from 'react';
import { Container, FormContainer, Wrapper, Form, CarouselContainer } from './styles/signup';
import { Button, Input } from 'antd';
import { FiMail, FiLock } from 'react-icons/fi';
import Carousel from '../../components/carousel';
import { InputContainer } from './styles/signup';

const SignupPage = props => {
    return (
        <Container>
            <div style={{ height: 30 }} />
            <Wrapper>
                <CarouselContainer>
                    <Carousel />
                </CarouselContainer>
                <FormContainer>
                    <Form>
                        <Input prefix={<FiMail />} placeholder="Email" size="large" />
                        <div style={{ height: 20 }} />
                        <InputContainer>
                            <Input placeholder="First Name" size="large" />
                            <div style={{ width: 10 }} />
                            <Input placeholder="Last Name" size="large" />
                        </InputContainer>
                        <div style={{ height: 20 }} />
                        <Input prefix={<FiLock />} placeholder="Password" type="password" size="large" />
                        <div style={{ height: 20 }} />
                        <Input prefix={<FiLock />} placeholder="Confirm Password" type="password" size="large" />
                        <div style={{ height: 20 }} />
                        <Button type="primary" htmlType="submit" block size="large">Sign up</Button>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}

export default SignupPage;