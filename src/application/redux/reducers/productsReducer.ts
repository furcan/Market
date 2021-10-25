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
        filterPage: rdxProductsInitialState.filterPage,
      };
    // Product Filter SortOrder: end

    // Product Filter Types: begin
    case rdxProductsActionTypes.PRODUCTS_FILTER_SET_TYPE:
      return {
        ...state,
        filterType: action.actionFilterType || rdxProductsInitialState.filterType,
        filterPage: rdxProductsInitialState.filterPage,
      };
    // Product Filter Types: end

    // Product Filter Brands: begin
    case rdxProductsActionTypes.PRODUCTS_FILTER_SET_BRANDS:
      return {
        ...state,
        filterBrands: action.actionFilterBrands || rdxProductsInitialState.filterBrands,
        filterPage: rdxProductsInitialState.filterPage,
      };
    // Product Filter Brands: end


    // Product Data Types: begin
    case rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_LOADING:
      return {
        ...state,
        loadingProductTypes: true,
        failureProductTypes: false,
        noResultsProductTypes: false,
      };

    case rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_FAILURE:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: true,
        noResultsProductTypes: false,
      };

    case rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_NORESULTS:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: false,
        noResultsProductTypes: true,
      };

    case rdxProductsActionTypes.PRODUCTS_TYPES_SET_DATA:
      return {
        ...state,
        loadingProductTypes: false,
        failureProductTypes: false,
        noResultsProductTypes: false,
        dataProductTypes: action.actionDataProductTypes || rdxProductsInitialState.dataProductTypes,
      };
    // Product Data Types: end

    // Product Data Brands: begin
    case rdxProductsActionTypes.PRODUCTS_BRANDS_GET_DATA_LOADING:
      return {
        ...state,
        loadingProductBrands: true,
        failureProductBrands: false,
        noResultsProductBrands: false,
      };

    case rdxProductsActionTypes.PRODUCTS_BRANDS_GET_DATA_FAILURE:
      return {
        ...state,
        loadingProductBrands: false,
        failureProductBrands: true,
        noResultsProductBrands: false,
      };

    case rdxProductsActionTypes.PRODUCTS_BRANDS_GET_DATA_NORESULTS:
      return {
        ...state,
        loadingProductBrands: false,
        failureProductBrands: false,
        noResultsProductBrands: true,
      };

    case rdxProductsActionTypes.PRODUCTS_BRANDS_SET_DATA:
      return {
        ...state,
        loadingProductBrands: false,
        failureProductBrands: false,
        noResultsProductBrands: false,
        dataProductBrands: action.actionDataProductBrands?.data || rdxProductsInitialState.dataProductBrands,
        dataProductBrandsTotalCount: action.actionDataProductBrands?.totalProductsCount || rdxProductsInitialState.dataProductBrandsTotalCount,
      };
    // Product Data Brands: end

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
