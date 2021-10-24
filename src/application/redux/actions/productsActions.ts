import { Dispatch } from 'redux';

import { Api, IApiProductTypes } from 'application/api';
import { addSomeDelayAsync } from 'application/helpers';
import { IReduxProductsActionTypes, IReduxProductsActions, IReduxProductsDispatch, IReduxProductsState } from 'application/redux/products';

const rdxProductsActionTypes: IReduxProductsActionTypes = {
  PRODUCTS_GET_TYPES_LOADING: 'PRODUCTS_GET_TYPES_LOADING',
  PRODUCTS_GET_TYPES_FAILURE: 'PRODUCTS_GET_TYPES_FAILURE',
  PRODUCTS_GET_TYPES_DATA: 'PRODUCTS_GET_TYPES_DATA',
  PRODUCTS_FILTER_TYPE: 'PRODUCTS_FILTER_TYPE',
  PRODUCTS_FILTER_SORTORDER: 'PRODUCTS_FILTER_SORTORDER',
};

const rdxProductsSelector = (state: IReduxProductsState): IReduxProductsState => state.productsReducer;


// Products Change Filter Type: begin
const productsChangeFilterType = (type: string): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_TYPE,
  actionFilterType: type,
});

const rdxProductsChangeFilterTypeAsync = (type: string): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsChangeFilterType(type));
};
// Products Change Filter Type: end

// Products Get & Set Types: begin
const productsGetTypesLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_GET_TYPES_LOADING,
});

const productsGetTypesFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_GET_TYPES_FAILURE,
});

const productsGetTypesSetData = (dataProductTypes: IApiProductTypes[]): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_GET_TYPES_DATA,
  actionDataProductTypes: dataProductTypes,
});

const rdxProductsGetTypesAsync = (): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsGetTypesLoading());

    await addSomeDelayAsync();

    const data: IApiProductTypes[] | null = await new Api().getProductTypes();

    if (!data) {
      throw new Error();
    }

    dispatch(productsGetTypesSetData(data));

    const theFirstType = data.find((type: IApiProductTypes) => type);
    if (theFirstType) {
      dispatch(productsChangeFilterType(theFirstType.queryString));
    }
  } catch {
    dispatch(productsGetTypesFailure());
  }
};
// Products Get & Set Types: begin


export {
  rdxProductsActionTypes,
  rdxProductsSelector,
  rdxProductsGetTypesAsync,
  rdxProductsChangeFilterTypeAsync,
};
