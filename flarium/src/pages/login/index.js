import React from 'react';
import { Container, FormContainer, Wrapper, Form, ForgotPasswordContainer, ForgotPassword, CarouselContainer } from './styles/login';
import { Button, Input } from 'antd';
import { FiMail, FiLock } from 'react-icons/fi';
import Carousel from '../../components/carousel';

const LoginPage = props => {
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
                        <Input prefix={<FiLock />} placeholder="Password" type="password" size="large" />
                        <ForgotPasswordContainer>
                            <ForgotPassword>
                                forgot password ?
                            </ForgotPassword>
                        </ForgotPasswordContainer>
                        <div style={{ height: 20 }} />
                        <Button type="primary" htmlType="submit" block size="large">Login</Button>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}

export default LoginPage;