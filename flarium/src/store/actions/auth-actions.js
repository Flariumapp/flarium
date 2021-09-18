import axios from '../../axios-config';
import * as actionTypes from '../action-types';

let timer = null;

export const autoLogin = (token, id, expiryDate) => {
    return dispatch => {
        if (token) {
            dispatch(authSuccess(token, id, expiryDate));
        } else {
            dispatch(authLogout());
        }
    }
}

export const login = (loginData) => {
    return async dispatch => {
        try {
<<<<<<< HEAD
            const response = await axios.post('api/auth/login', loginData);
=======
            const response = await axios.post('auth/login', loginData);

            console.log('login:',response.data);
>>>>>>> frontend-branch

            const { token, id, expiryDate } = response.data;

            const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            dispatch(setLocalVariables(token, id, expiryDateModified));
        } catch (err) {
<<<<<<< HEAD
            dispatch(authFail(err.response.data.message));
=======
>>>>>>> frontend-branch
            throw err;
        }
    }
}

export const signup = (signupData) => {
    return async dispatch => {
        try {
<<<<<<< HEAD
            const response = await axios.post('api/auth/signup', signupData);

            const { token, id, expiryDate } = response.data;

            const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            dispatch(setLocalVariables(token, id, expiryDateModified));
        } catch (err) {
            dispatch(authFail(err.response.data.message));
=======
            const response = await axios.post('auth/signup', signupData);

            const { token } = response.data;

            // const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            dispatch(setLocalVariables(token));
        } catch (err) {
>>>>>>> frontend-branch
            throw err;
        }
    }
}

export const logout = () => {
    return async dispatch => {
        localStorage.removeItem('authData');
        if (timer) {
            clearTimeout(timer);
        }
        dispatch(authLogout());
    }
}

const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}


<<<<<<< HEAD
const setLocalVariables = (token, id, expiryDate) => {
    return dispatch => {
        localStorage.setItem('authData', JSON.stringify({
            token,
            id,
        }));

        timer = setTimeout(() => {
            dispatch(logout());
        }, expiryDate);

        dispatch(authSuccess(token, id, expiryDate));
    }
}

const authSuccess = (token, id, expiryDate) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        id,
        expiryDate,
    }
}

const authFail = (errorMessage) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: errorMessage,
    }
}   
=======
const setLocalVariables = (token) => {
    return dispatch => {
        console.log('setting local variables', token);
        localStorage.setItem('authData', JSON.stringify({
            token,
        }));

        // timer = setTimeout(() => {
        //     dispatch(logout());
        // }, 24 * 60 * 60 * 1000);

        dispatch(authSuccess(token));
    }
}

const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        // id,
        // expiryDate,
    }
}
>>>>>>> frontend-branch
