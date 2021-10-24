import { Dispatch } from 'redux';

import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { IApiProductType, IApiProductBrand, IApiProductTag, IApiProductItems, IApiProductItem } from 'application/api';

interface IReduxProductsState {
  filterPage: number,
  filterSortOrder: EFilterSortOrder;
  filterType: string | null;
  filterBrands: string | null;
  filterTags: string | null;
  loadingProductTypes: boolean;
  loadingProductBrands: boolean;
  loadingProductTags: boolean;
  loadingProductItems: boolean;
  failureProductTypes: boolean;
  failureProductBrands: boolean;
  failureProductTags: boolean;
  failureProductsItems: boolean;
  dataProductTypes: IApiProductType[];
  dataProductBrands: IApiProductBrand[];
  dataProductTags: IApiProductTag[];
  dataProductItems: IApiProductItem[];
  dataProductItemsTotalCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productsReducer?: any;
}

interface IReduxProductsActionTypes {
  PRODUCTS_FILTER_SET_PAGE: string;
  PRODUCTS_FILTER_SET_SORTORDER: string;
  PRODUCTS_FILTER_SET_TYPE: string;
  PRODUCTS_TYPES_GET_DATA_LOADING: string;
  PRODUCTS_TYPES_GET_DATA_FAILURE: string;
  PRODUCTS_TYPES_SET_DATA: string;
  PRODUCTS_ITEMS_GET_DATA_LOADING: string;
  PRODUCTS_ITEMS_GET_DATA_FAILURE: string;
  PRODUCTS_ITEMS_SET_DATA: string;
}

interface IReduxProductsActions {
  type: string;
  actionFilterPage?: number;
  actionFilterSortOrder?: EFilterSortOrder;
  actionFilterType?: string;
  actionDataProductTypes?: IApiProductType[];
  actionDataProductItems?: IApiProductItems;
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
