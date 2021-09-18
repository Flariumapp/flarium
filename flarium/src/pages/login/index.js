import React, { useState } from 'react';
import { Container, FormContainer, Wrapper, Form, ForgotPasswordContainer, ForgotPassword, CarouselContainer } from './styles/login';
import { Button, Input, message } from 'antd';
import { FiMail, FiLock } from 'react-icons/fi';
import Carousel from '../../components/carousel';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store';
import { errConfig } from '../../utility/error-config';
import { emailValidator, passwordValidator } from '../../validators/auth';
import { useHistory } from 'react-router';

const LoginPage = props => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const checkValidity = () => {
        const _emailError = emailValidator(email);
        const _passwordError = passwordValidator(password);

        if (_emailError) {
            setError(_emailError);
            return false;
        }

        if (_passwordError) {
            setError(_passwordError);
            return false;
        }

        return true;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);
        const isValid = checkValidity();

        if (!isValid) {
            setIsLoading(false);
            return;
        }

        dispatch(login({
            username: email,
            password,
        })).then(result => {
            setIsLoading(false);
            history.replace('/');
        }).catch(err => {
            setIsLoading(false);
            const errMsg = errConfig(err, 'Login failed!');
            message.error({
                content: errMsg
            });
        });
    }

    return (
        <Container>
            <div style={{ height: 30 }} />
            <Wrapper>
                <CarouselContainer>
                    <Carousel />
                </CarouselContainer>
                <FormContainer>
                    <Form onSubmit={handleLogin}>
                        <Input prefix={<FiMail />} placeholder="Email" size="large" value={email} onChange={e => setEmail(e.target.value)} />
                        <div style={{ height: 20 }} />
                        <Input prefix={<FiLock />} placeholder="Password" type="password" size="large" value={password} onChange={e => setPassword(e.target.value)} />
                        <ForgotPasswordContainer>
                            <ForgotPassword>
                                forgot password ?
                            </ForgotPassword>
                        </ForgotPasswordContainer>
                        <div style={{ height: 20 }} />
                        <Button type="primary" loading={isLoading} htmlType="submit" block size="large">Login</Button>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}

export default LoginPage;