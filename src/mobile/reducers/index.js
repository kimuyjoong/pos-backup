import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import Header from './Header.js';
import User from './User.js';
import Proposal from './Proposal.js';

export default combineReducers({
    Header,
    User,
    Proposal,
    form: reduxFormReducer
});
