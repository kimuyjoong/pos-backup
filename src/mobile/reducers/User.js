import * as Types from "../actions/ActionTypes";

const loginInitialState = {
    isLoggedIn: false,
    user: null
};

const user = (state = loginInitialState, action) => {
    switch (action.type) {
        case Types.FETCH_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.data
            };
        case Types.FETCH_LOGIN_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
};

export default user;
