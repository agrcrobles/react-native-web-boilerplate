import { combineReducers } from 'redux';

import { Navigator } from './navigation';

const navigation = (state, action) => Navigator.router.getStateForAction(action, state);

export default combineReducers({ navigation });
