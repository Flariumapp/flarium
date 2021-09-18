import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ children, ...props }) => {
    const isAdmin = useSelector(state => state.ath.isAdmin);

    if (!isAdmin) {
        return <Redirect to={"/"} />
    }

    return (
        <Route {...props}>
            {children}
        </Route>
    );
}

export default AuthRoute;