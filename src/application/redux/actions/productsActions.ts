import { Dispatch } from 'redux';

import { IReduxProductsActionTypes, IReduxProductsActions, IReduxProductsDispatch, IReduxProductsState } from 'application/redux/products';

const rdxProductsActionTypes: IReduxProductsActionTypes = {
  PRODUCTS_TYPE: 'PRODUCTS_TYPE',
  PRODUCTS_FILTER_SORTORDER: 'PRODUCTS_FILTER_SORTORDER',
};

const rdxProductsSelector = (state: IReduxProductsState): IReduxProductsState => state.productsReducer;

// Products Change Type: begin
const productsChangeType = (type: string): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPE,
  actionFilterType: type,
});

const rdxProductsChangeTypeAsync = (type: string): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsChangeType(type));
};
// Products Change Type: end


export {
  rdxProductsActionTypes,
  rdxProductsSelector,
  rdxProductsChangeTypeAsync,
};
