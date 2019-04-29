import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import Header from './Header.js';

export default combineReducers({
    Header,
    form: reduxFormReducer
});
