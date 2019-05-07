import {
    NAV,
    NAV_OFF,
    NAV_LINK,
    TEST_API,
    TEST_API_ERROR,
    FETCH_LOGIN,
    FETCH_LOGIN_OUT,
    FETCH_LOGIN_ERROR,
    FETCH_PROPOSAL,
    FETCH_PROPOSAL_ERROR
} from './ActionTypes.js';

export const navChange = () => {
    return {
        type: NAV
    }
};

export const navChangeOff = () => {
    return {
        type: NAV_OFF
    }
};

export const navLink = (e) => {
    return {
        type: NAV_LINK,
        e
    }
};

export const getTestApi = () => {
    return async function(dispatch) {
        try {
            const responseData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const response = await responseData.json();

            dispatch({
                type: TEST_API,
                response
            });
        } catch(err) {
            dispatch({
                type: TEST_API_ERROR,
                err
            });
        }
    }
};

export const fetchLoginApi = () => {
    return async function(dispatch) {
        try {
            const responseData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const response = await responseData.json();
            let data = {
                nickName : '김사장'
            };

            dispatch({
                type: FETCH_LOGIN,
                response,
                data
            });
        } catch(err) {
            dispatch({
                type: FETCH_LOGIN_ERROR,
                err
            });
        }
    }
};

export const fetchLoginOut = () => {
    return async function(dispatch) {
        const responseData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response = await responseData.json();

        dispatch({
            type: FETCH_LOGIN_OUT,
            response
        });
    }
};

export const fetchProposalApi = () => {
    return async function(dispatch) {
        try {
            const responseData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const response = await responseData.json();

            dispatch({
                type: FETCH_PROPOSAL,
                response,
            });
        } catch(err) {
            dispatch({
                type: FETCH_PROPOSAL_ERROR,
                err
            });
        }
    }
};
