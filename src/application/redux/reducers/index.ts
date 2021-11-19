import { combineReducers } from 'redux';

import { marketReducer } from 'application/redux/reducers/marketReducer';
import { productsReducer } from 'application/redux/reducers/productsReducer';
import { basketReducer } from 'application/redux/reducers/basketReducer';

const reduxAppReducers = combineReducers({
  marketReducer,
  productsReducer,
  basketReducer,
});

export { reduxAppReducers };
