import * as actionTypes from '../action-types';

const initialState = {
    token: null,
    id: null,
    expiryDate: null,
    isAdmin: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                id: action.id,
                expiryDate: action.expiryDate,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                id: null,
                expiryDate: null,
                error: null,
            }
        default:
            return state;
    }
}

export default reducer;