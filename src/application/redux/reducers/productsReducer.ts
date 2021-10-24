import { IReduxProductsActions, IReduxProductsState, rdxProductsInitialState, rdxProductsActionTypes } from 'application/redux/products';

/* eslint-disable indent */
const productsReducer = (state = rdxProductsInitialState, action: IReduxProductsActions): IReduxProductsState => {
  switch (action.type) {

    // Product Filter Page: begin
    case rdxProductsActionTypes.PRODUCTS_FILTER_SET_PAGE:
      return {
        ...state,
        filterPage: action.actionFilterPage || rdxProductsInitialState.filterPage,
      };
    // Product Filter Page: end

    // Product Filter SortOrder: begin
    case rdxProductsActionTypes.PRODUCTS_FILTER_SET_SORTORDER:
      return {
        ...state,
        filterSortOrder: action.actionFilterSortOrder || rdxProductsInitialState.filterSortOrder,
      };
    // Product Filter SortOrder: end

    // Product Filter Types: begin
    case rdxProductsActionTypes.PRODUCTS_FILTER_SET_TYPE:
      return {
        ...state,
        filterType: action.actionFilterType || rdxProductsInitialState.filterType,
      };
    // Product Filter Types: end


    // Product Data Types: begin
    case rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_LOADING:
      return {
        ...state,
        loadingProductTypes: true,
        failureProductTypes: false,
      };

    case rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_FAILURE:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: true,
      };

    case rdxProductsActionTypes.PRODUCTS_TYPES_SET_DATA:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: false,
        dataProductTypes: action.actionDataProductTypes || rdxProductsInitialState.dataProductTypes,
      };
    // Product Data Types: end

    // Products Data: begin
    case rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_LOADING:
      return {
        ...state,
        loadingProductItems: true,
        failureProductsItems: false,
      };

    case rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_FAILURE:
      return {
        ...state,
        loadingProductItems: false,
        failureProductsItems: true,
      };

    case rdxProductsActionTypes.PRODUCTS_ITEMS_SET_DATA:
      return {
        ...state,
        loadingProductItems: false,
        failureProductsItems: false,
        dataProductItems: action.actionDataProductItems?.products || rdxProductsInitialState.dataProductItems,
        dataProductItemsTotalCount: action.actionDataProductItems?.totalCount || rdxProductsInitialState.dataProductItemsTotalCount,
      };
    // Products Data: end

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  productsReducer,
};
