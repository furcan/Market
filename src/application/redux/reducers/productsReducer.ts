import { IReduxProductsActions, IReduxProductsState, rdxProductsInitialState, rdxProductsActionTypes } from 'application/redux/products';

/* eslint-disable indent */
const productsReducer = (state = rdxProductsInitialState, action: IReduxProductsActions): IReduxProductsState => {
  switch (action.type) {
    case rdxProductsActionTypes.PRODUCTS_TYPE:
      return {
        ...state,
        filterType: action.actionFilterType || rdxProductsInitialState.filterType,
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  productsReducer,
};
