import { Dispatch } from 'redux';

import { Api, IApiProductItems, IApiProductType } from 'application/api';
import { addSomeDelayAsync } from 'application/helpers';
import { IReduxProductsActionTypes, IReduxProductsActions, IReduxProductsDispatch, IReduxProductsState } from 'application/redux/products';

const rdxProductsActionTypes: IReduxProductsActionTypes = {
  PRODUCTS_FILTER_SET_TYPE: 'PRODUCTS_FILTER_SET_TYPE',
  PRODUCTS_FILTER_SET_SORTORDER: 'PRODUCTS_FILTER_SET_SORTORDER',
  PRODUCTS_TYPES_GET_DATA_LOADING: 'PRODUCTS_TYPES_GET_DATA_LOADING',
  PRODUCTS_TYPES_GET_DATA_FAILURE: 'PRODUCTS_TYPES_GET_DATA_FAILURE',
  PRODUCTS_TYPES_SET_DATA: 'PRODUCTS_TYPES_SET_DATA',
  PRODUCTS_ITEMS_GET_DATA_LOADING: 'PRODUCTS_ITEMS_GET_DATA_LOADING',
  PRODUCTS_ITEMS_GET_DATA_FAILURE: 'PRODUCTS_ITEMS_GET_DATA_FAILURE',
  PRODUCTS_ITEMS_SET_DATA: 'PRODUCTS_ITEMS_SET_DATA',
};

const rdxProductsSelector = (state: IReduxProductsState): IReduxProductsState => state.productsReducer;


// Products Filter Set Type: begin
const productsFilterSetType = (type: string): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_SET_TYPE,
  actionFilterType: type,
});

const rdxProductsFilterSetTypeAsync = (type: string): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsFilterSetType(type));
};
// Products Filter Set Type: end

// Products Types Get & Set Data: begin
const productsTypesGetDataLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_LOADING,
});

const productsTypesGetDataFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_FAILURE,
});

const productsTypesSetData = (dataProductTypes: IApiProductType[]): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_SET_DATA,
  actionDataProductTypes: dataProductTypes,
});

const rdxProductsTypesGetDataAsync = (): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsTypesGetDataLoading());

    await addSomeDelayAsync();

    const data: IApiProductType[] | null = await new Api().getProductTypes();

    if (!data) {
      throw new Error();
    }

    dispatch(productsTypesSetData(data));

    const theFirstType: IApiProductType | undefined = data.find((type: IApiProductType) => type);
    if (theFirstType) {
      dispatch(productsFilterSetType(theFirstType.queryString));
    }
  } catch {
    dispatch(productsTypesGetDataFailure());
  }
};
// Products Types Get & Set Data: end

// Products Items Get & Set Data: begin
const productsItemsGetDataLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_LOADING,
});

const productsItemsGetDataFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_FAILURE,
});

const productsItemsSetData = (data: IApiProductItems): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_SET_DATA,
  actionDataProductItems: data,
});

const rdcProductsItemsGetDataAsync = (filters: string[], page: number): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsItemsGetDataLoading());

    await addSomeDelayAsync();

    const data: IApiProductItems | null = await new Api().getProductsByFiltersAndPage(filters, page);

    if (!data) {
      throw new Error();
    }

    dispatch(productsItemsSetData(data));
  } catch {
    dispatch(productsItemsGetDataFailure());
  }
};
// Products Items Get & Set Data: end

export {
  rdxProductsActionTypes,
  rdxProductsSelector,
  rdxProductsTypesGetDataAsync,
  rdxProductsFilterSetTypeAsync,
  rdcProductsItemsGetDataAsync,
};
