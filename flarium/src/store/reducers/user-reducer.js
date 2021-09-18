import * as actionTypes from '../action-types';

const initialState = {
    users: [],
<<<<<<< HEAD
    onlineUsers: [],
    currentUser: null,
    error: null,
=======
    currentUser: null,
>>>>>>> frontend-branch
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
<<<<<<< HEAD
        case actionTypes.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: action.onlineUsers,
            }
=======
>>>>>>> frontend-branch
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
            }
        case actionTypes.USER_SUCCESS:
<<<<<<< HEAD
            return {
                ...state,
                error: null,
            }
        case actionTypes.USER_FAIL:
            return {
                ...state,
                error: action.error,
            }
=======
            return state;
>>>>>>> frontend-branch
        default:
            return state;
    }
}

export default reducer;