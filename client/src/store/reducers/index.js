import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const Reducer = combineReducers({
  authentication,
  users,
  alert
});

export default Reducer;