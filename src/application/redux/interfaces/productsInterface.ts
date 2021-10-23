import { Dispatch } from 'redux';

import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';

interface IProductTypes {
  id: string;
  name: string;
  queryString: string;
}

interface IProductBrands {
  id: string;
  name: string;
  queryString: string;
}

interface IProductTags {
  id: string;
  name: string;
  queryString: string;
}

interface IReduxProductsState {
  filterSortOrder: EFilterSortOrder;
  filterType: string | null;
  filterBrands: string | null;
  filterTags: string | null;
  dataProductTypes: IProductTypes[];
  dataProductBrands: IProductBrands[];
  dataProductTags: IProductTags[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productsReducer?: any;
}

interface IReduxProductsActionTypes {
  PRODUCTS_TYPE: string;
  PRODUCTS_FILTER_SORTORDER: string;
}

interface IReduxProductsActions {
  type: string;
  actionFilterType?: string,
  actionFilterSortOrder?: EFilterSortOrder,
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
