import * as Types from "../actions/ActionTypes";

const headerInitialState = {
    nav: false
}

const header = (state = headerInitialState, action) => {
    switch (action.type) {
        case Types.NAV:
            return {
                ...state,
                nav: !state.nav
            }
    }
};

export default header;
