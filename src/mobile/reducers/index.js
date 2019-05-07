import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import Header from './Header.js';
import User from './User.js';

export default combineReducers({
    Header,
    User,
    form: reduxFormReducer
});
