import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ children, ...props }) => {
<<<<<<< HEAD
    const isAuthenticated = useSelector(state => state.ath.token !== null);

    if (!isAuthenticated) {
=======
    // const isAuthenticated = useSelector(state => state.ath.token !== null);
    const isAuth = true;

    if (!isAuth) {
>>>>>>> frontend-branch
        return <Redirect to={"/login"} />
    }

    return (
        <Route {...props}>
            {children}
        </Route>
    );
}

export default AuthRoute;