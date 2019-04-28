import { NAV, NAV_OFF, TEST_API, TEST_API_ERROR } from './ActionTypes.js';

export const navChange = () => {
    return {
        type: NAV
    }
}

export const navChangeOff = () => {
    return {
        type: NAV_OFF
    }
}

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
}
