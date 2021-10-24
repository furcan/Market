import { Dispatch } from 'redux';

import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { IApiProductTypes, IApiProductBrands, IApiProductTags } from 'application/api';

interface IReduxProductsState {
  filterSortOrder: EFilterSortOrder;
  filterType: string | null;
  filterBrands: string | null;
  filterTags: string | null;
  loadingProductTypes: boolean;
  loadingProductBrands: boolean;
  loadingProductTags: boolean;
  failureProductTypes: boolean;
  failureProductBrands: boolean;
  failureProductTags: boolean;
  dataProductTypes: IApiProductTypes[];
  dataProductBrands: IApiProductBrands[];
  dataProductTags: IApiProductTags[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productsReducer?: any;
}

interface IReduxProductsActionTypes {
  PRODUCTS_GET_TYPES_LOADING: string;
  PRODUCTS_GET_TYPES_FAILURE: string;
  PRODUCTS_GET_TYPES_DATA: string;
  PRODUCTS_FILTER_TYPE: string;
  PRODUCTS_FILTER_SORTORDER: string;
}

interface IReduxProductsActions {
  type: string;
  actionFilterSortOrder?: EFilterSortOrder;
  actionFilterType?: string;
  actionDataProductTypes?: IApiProductTypes[];
}

interface IReduxProductsDispatch {
  (dispatch: Dispatch<IReduxProductsActions>): Promise<void>;
}

export type {
  IReduxProductsState,
  IReduxProductsActionTypes,
  IReduxProductsActions,
  IReduxProductsDispatch,
};
