import React from 'react';
import { Container } from './styles/body';
import { Switch } from 'react-router-dom';
import GuestRoute from '../../guards/guest-route';
import GuestPage from '../../pages/guest';
import LoginPage from '../../pages/login';
import SignupPage from '../../pages/signup';
import HomePage from '../../pages/home';
// import { useSelector } from 'react-redux';
import AuthRoute from '../../guards/auth-route';
import FlightsPage from '../../pages/flights';

const Body = (props) => {
    // const token = useSelector(state => state.ath.token);
    const isAuth = true;

    return (
        <Container>
            <Switch>
                <GuestRoute path={'/login'} exact>
                    <LoginPage />
                </GuestRoute>
                <GuestRoute path={'/sign-up'} exact>
                    <SignupPage />
                </GuestRoute>
                <GuestRoute path={'/flights'} exact>
                    <FlightsPage />
                </GuestRoute>
                {
                    !isAuth ?
                    <GuestRoute path={'/'} exact>
                        <GuestPage />
                    </GuestRoute>
                    :
                    <AuthRoute>
                        <HomePage />
                    </AuthRoute>
                }
            </Switch>
        </Container>
    );
}

export default Body;