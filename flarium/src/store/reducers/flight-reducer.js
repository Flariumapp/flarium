import { FLIGHT_SUCCESS, SET_FLIGHTS } from '../action-types';

const initialState = {
    flights: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS:
            return {
                flights: action.flights,
            }
        case FLIGHT_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;