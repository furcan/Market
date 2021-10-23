import { combineReducers } from 'redux';

import { marketReducer } from 'application/redux/reducers/marketReducer';

const appReducers = combineReducers({
  marketReducer,
});

export { appReducers };
