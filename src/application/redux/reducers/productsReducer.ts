import { IReduxProductsActions, IReduxProductsState, rdxProductsInitialState, rdxProductsActionTypes } from 'application/redux/products';

/* eslint-disable indent */
const productsReducer = (state = rdxProductsInitialState, action: IReduxProductsActions): IReduxProductsState => {
  switch (action.type) {
    // Product Types: begin
    case rdxProductsActionTypes.PRODUCTS_GET_TYPES_LOADING:
      return {
        ...state,
        loadingProductTypes: true,
        failureProductTypes: false,
      };

    case rdxProductsActionTypes.PRODUCTS_GET_TYPES_FAILURE:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: true,
      };

    case rdxProductsActionTypes.PRODUCTS_GET_TYPES_DATA:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: false,
        dataProductTypes: action.actionDataProductTypes || rdxProductsInitialState.dataProductTypes,
      };
    // Product Types: end

    case rdxProductsActionTypes.PRODUCTS_FILTER_TYPE:
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
