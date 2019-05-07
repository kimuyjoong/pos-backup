import * as Types from "../actions/ActionTypes";

const proposalInitialState = {
    success: false,
};

const proposal = (state = proposalInitialState, action) => {
    switch (action.type) {
        case Types.FETCH_PROPOSAL:
            return {
                ...state,
                success: true,
            };
        case Types.FETCH_PROPOSAL_ERROR:
            return {
                ...state,
                success: false,
            };
        default:
            return state;
    }
};

export default proposal;
