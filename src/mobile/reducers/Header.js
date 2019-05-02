import * as Types from "../actions/ActionTypes";

const headerInitialState = {
    nav: false
};

const header = (state = headerInitialState, action) => {
    switch (action.type) {
        case Types.NAV:
            return {
                ...state,
                nav: !state.nav
            };
        case Types.NAV_OFF:
            return {
                ...state,
                nav: false
            };
        case Types.NAV_LINK:
            return {
                ...state,
                link: action.e
            };
        case Types.TEST_API:
            return {
                ...state,
                testJSON: action.response
            };
        case Types.TEST_API_ERROR:
            return {
                ...state,
                testJSON: action.response
            };
        default:
            return state;
    }
};

export default header;
