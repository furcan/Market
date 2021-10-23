import { combineReducers } from 'redux';

import { marketReducer } from 'application/redux/reducers/marketReducer';
import { productsReducer } from 'application/redux/reducers/productsReducer';

const appReducers = combineReducers({
  marketReducer,
  productsReducer,
});

export { appReducers };
