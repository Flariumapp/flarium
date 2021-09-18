<<<<<<< HEAD
import React from 'react';
import { Container, FormContainer, Wrapper, Form, CarouselContainer } from './styles/signup';
import { Button, Input } from 'antd';
import { FiMail, FiLock } from 'react-icons/fi';
import Carousel from '../../components/carousel';
import { InputContainer } from './styles/signup';

const SignupPage = props => {
=======
import React, { useState } from 'react';
import { Container, FormContainer, Wrapper, Form, CarouselContainer } from './styles/signup';
import { Button, Input, message } from 'antd';
import { FiMail, FiLock } from 'react-icons/fi';
import Carousel from '../../components/carousel';
import { InputContainer } from './styles/signup';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store';
import { errConfig } from '../../utility/error-config';
import {
    emailValidator,
    firstNameValidator,
    lastNameValidator,
    passwordValidator,
    passwordConfirmValidator
} from '../../validators/auth';
import { useHistory } from 'react-router';

const SignupPage = props => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const checkValidity = () => {
        const _emailError = emailValidator(email);
        const _firstNameError = firstNameValidator(firstName);
        const _lastNameError = lastNameValidator(lastName);
        const _passwordError = passwordValidator(password);
        const _passwordConfirmError = passwordConfirmValidator(passwordConfirm, password);

        if (_emailError) {
            setError(_emailError);
            return false;
        }

        if (_firstNameError) {
            setError(_firstNameError);
            return false;
        }

        if (_lastNameError) {
            setError(_lastNameError);
            return false;
        }

        if (_passwordError) {
            setError(_passwordError);
            return false;
        }

        if (_passwordConfirmError) {
            setError(_passwordConfirmError);
            return false;
        }

        return true;
    }

    const handleSignup = (e) => {
        e.preventDefault();

        setIsLoading(true);
        const isValid = checkValidity();

        if (!isValid) {
            setIsLoading(false);
            return;
        }

        dispatch(signup({
            username: email,
            firstName,
            lastName,
            password,
        })).then(result => {
            setIsLoading(false);
            history.replace('/');
        }).catch(err => {
            setIsLoading(false);
            const errMsg = errConfig(err, 'Sign up failed!');
            message.error({
                content: errMsg
            });
        });
    }

>>>>>>> frontend-branch
    return (
        <Container>
            <div style={{ height: 30 }} />
            <Wrapper>
                <CarouselContainer>
                    <Carousel />
                </CarouselContainer>
                <FormContainer>
<<<<<<< HEAD
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
=======
                    <Form onSubmit={handleSignup}>
                        <Input prefix={<FiMail />} placeholder="Email" size="large"  value={email} onChange={e => setEmail(e.target.value)} />
                        <div style={{ height: 20 }} />
                        <InputContainer>
                            <Input placeholder="First Name" size="large"  value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <div style={{ width: 10 }} />
                            <Input placeholder="Last Name" size="large"  value={lastName} onChange={e => setLastName(e.target.value)} />
                        </InputContainer>
                        <div style={{ height: 20 }} />
                        <Input prefix={<FiLock />} placeholder="Password" type="password" size="large"  value={password} onChange={e => setPassword(e.target.value)} />
                        <div style={{ height: 20 }} />
                        <Input prefix={<FiLock />} placeholder="Confirm Password" type="password" size="large"  value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                        <div style={{ height: 20 }} />
                        <Button type="primary" loading={isLoading} htmlType="submit" block size="large">Sign up</Button>
>>>>>>> frontend-branch
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}

export default SignupPage;