import React from 'react';
import { Container } from './styles/body';
import { Switch } from 'react-router-dom';
import GuestRoute from '../../guards/guest-route';
import GuestPage from '../../pages/guest';
import LoginPage from '../../pages/login';
import SignupPage from '../../pages/signup';

const Body = (props) => {
    return (
        <Container>
            <Switch>
                <GuestRoute path={'/login'} exact>
                    <LoginPage />
                </GuestRoute>
                <GuestRoute path={'/sign-up'} exact>
                    <SignupPage />
                </GuestRoute>
                <GuestRoute path={'/'} exact>
                    <GuestPage />
                </GuestRoute>
            </Switch>
        </Container>
    );
}

export default Body;