import { Dispatch } from 'redux';

import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { Api, IApiProductType, IApiProductBrands, IApiProductTags, IApiProductItems } from 'application/api';
import { actionWindowScrollToTop, addSomeDelayAsync } from 'application/helpers';
import { IReduxProductsActionTypes, IReduxProductsActions, IReduxProductsDispatch, IReduxProductsState } from 'application/redux/products';

const rdxProductsActionTypes: IReduxProductsActionTypes = {
  PRODUCTS_FILTER_SET_PAGE: 'PRODUCTS_FILTER_SET_PAGE',
  PRODUCTS_FILTER_SET_SORTORDER: 'PRODUCTS_FILTER_SET_SORTORDER',
  PRODUCTS_FILTER_SET_TYPE: 'PRODUCTS_FILTER_SET_TYPE',
  PRODUCTS_FILTER_SET_BRANDS: 'PRODUCTS_FILTER_SET_BRANDS',
  PRODUCTS_FILTER_SET_TAGS: 'PRODUCTS_FILTER_SET_TAGS',
  PRODUCTS_TYPES_GET_DATA_LOADING: 'PRODUCTS_TYPES_GET_DATA_LOADING',
  PRODUCTS_TYPES_GET_DATA_FAILURE: 'PRODUCTS_TYPES_GET_DATA_FAILURE',
  PRODUCTS_TYPES_GET_DATA_NORESULTS: 'PRODUCTS_TYPES_GET_DATA_NORESULTS',
  PRODUCTS_TYPES_SET_DATA: 'PRODUCTS_TYPES_SET_DATA',
  PRODUCTS_BRANDS_GET_DATA_LOADING: 'PRODUCTS_BRANDS_GET_DATA_LOADING',
  PRODUCTS_BRANDS_GET_DATA_FAILURE: 'PRODUCTS_BRANDS_GET_DATA_FAILURE',
  PRODUCTS_BRANDS_GET_DATA_NORESULTS: 'PRODUCTS_BRANDS_GET_DATA_NORESULTS',
  PRODUCTS_BRANDS_SET_DATA: 'PRODUCTS_BRANDS_SET_DATA',
  PRODUCTS_TAGS_GET_DATA_LOADING: 'PRODUCTS_TAGS_GET_DATA_LOADING',
  PRODUCTS_TAGS_GET_DATA_FAILURE: 'PRODUCTS_TAGS_GET_DATA_FAILURE',
  PRODUCTS_TAGS_GET_DATA_NORESULTS: 'PRODUCTS_TAGS_GET_DATA_NORESULTS',
  PRODUCTS_TAGS_SET_DATA: 'PRODUCTS_TAGS_SET_DATA',
  PRODUCTS_ITEMS_GET_DATA_LOADING: 'PRODUCTS_ITEMS_GET_DATA_LOADING',
  PRODUCTS_ITEMS_GET_DATA_FAILURE: 'PRODUCTS_ITEMS_GET_DATA_FAILURE',
  PRODUCTS_ITEMS_GET_DATA_NORESULTS: 'PRODUCTS_ITEMS_GET_DATA_NORESULTS',
  PRODUCTS_ITEMS_SET_DATA: 'PRODUCTS_ITEMS_SET_DATA',
};

const rdxProductsSelector = (state: IReduxProductsState): IReduxProductsState => state.productsReducer;


// Products Filter Set Page: begin
const productsFilterSetPage = (pageNumber: number): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_SET_PAGE,
  actionFilterPage: pageNumber,
});

const rdxProductsFilterSetPageAsync = (pageNumber: number): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsFilterSetPage(pageNumber));
};
// Products Filter Set Page: end

// Products Filter Set SortOrder: begin
const productsFilterSetSortOrder = (sortOrder: EFilterSortOrder): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_SET_SORTORDER,
  actionFilterSortOrder: sortOrder,
});

const rdxProductsFilterSetSortOrderAsync = (sortOrder: EFilterSortOrder): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsFilterSetSortOrder(sortOrder));
};
// Products Filter Set SortOrder: end

// Products Filter Set Type: begin
const productsFilterSetType = (type: string): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_SET_TYPE,
  actionFilterType: type,
});

const rdxProductsFilterSetTypeAsync = (type: string): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsFilterSetType(type));
};
// Products Filter Set Type: end

// Products Filter Set Brands: begin
const productsFilterSetBrands = (brands: string | null): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_SET_BRANDS,
  actionFilterBrands: brands,
});

const rdxProductsFilterSetBrandsAsync = (brands: string | null): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsFilterSetBrands(brands));
};
// Products Filter Set Brands: end

// Products Filter Set Tags: begin
const productsFilterSetTags = (tags: string | null): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_FILTER_SET_TAGS,
  actionFilterTags: tags,
});

const rdxProductsFilterSetTagsAsync = (tags: string | null): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  dispatch(productsFilterSetTags(tags));
};
// Products Filter Set Tags: end


// Products Types Get & Set Data: begin
const productsTypesGetDataLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_LOADING,
});

const productsTypesGetDataFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_FAILURE,
});

const productsTypesGetDataNoResults = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_GET_DATA_NORESULTS,
});

const productsTypesSetData = (dataProductTypes: IApiProductType[]): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TYPES_SET_DATA,
  actionDataProductTypes: dataProductTypes,
});

const rdxProductsTypesGetDataAsync = (): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsTypesGetDataLoading());

    await addSomeDelayAsync(500);

    const productTypes: IApiProductType[] | null = await new Api().getProductTypes();

    if (!productTypes) {
      throw new Error();
    }

    if (productTypes.length > 0) {
      dispatch(productsTypesSetData(productTypes));

      const theFirstType: IApiProductType | undefined = productTypes.find((type: IApiProductType) => type);
      if (theFirstType) {
        dispatch(productsFilterSetType(theFirstType.queryString));
      }
    } else {
      dispatch(productsTypesGetDataNoResults());
    }
  } catch {
    dispatch(productsTypesGetDataFailure());
  }
};
// Products Types Get & Set Data: end


// Products Brands Get & Set Data: begin
const productsBrandsGetDataLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_BRANDS_GET_DATA_LOADING,
});

const productsBrandsGetDataFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_BRANDS_GET_DATA_FAILURE,
});

const productsBrandsGetDataNoResults = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_BRANDS_GET_DATA_NORESULTS,
});

const productsBrandsSetData = (dataProductBrands: IApiProductBrands): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_BRANDS_SET_DATA,
  actionDataProductBrands: dataProductBrands,
});

const rdxProductsBrandsGetDataAsync = (): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsBrandsGetDataLoading());

    await addSomeDelayAsync(500);

    const brands: IApiProductBrands | null = await new Api().getProductBrands();

    if (!brands) {
      throw new Error();
    }

    if (brands.data.length > 0) {
      dispatch(productsBrandsSetData(brands));
    } else {
      dispatch(productsBrandsGetDataNoResults());
    }
  } catch {
    dispatch(productsBrandsGetDataFailure());
  }
};
// Products Brands Get & Set Data: end


// Products Tags Get & Set Data: begin
const productsTagsGetDataLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TAGS_GET_DATA_LOADING,
});

const productsTagsGetDataFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TAGS_GET_DATA_FAILURE,
});

const productsTagsGetDataNoResults = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TAGS_GET_DATA_NORESULTS,
});

const productsTagsSetData = (dataProductTags: IApiProductTags): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_TAGS_SET_DATA,
  actionDataProductTags: dataProductTags,
});

const rdxProductsTagsGetDataAsync = (): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsTagsGetDataLoading());

    await addSomeDelayAsync(500);

    const tags: IApiProductTags | null = await new Api().getProductTags();

    if (!tags) {
      throw new Error();
    }

    if (tags.data.length > 0) {
      dispatch(productsTagsSetData(tags));
    } else {
      dispatch(productsTagsGetDataNoResults());
    }
  } catch {
    dispatch(productsTagsGetDataFailure());
  }
};
// Products Tags Get & Set Data: end


// Products Items Get & Set Data: begin
const productsItemsGetDataLoading = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_LOADING,
});

const productsItemsGetDataFailure = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_FAILURE,
});

const productsItemsGetDataNoResults = (): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_GET_DATA_NORESULTS,
});

const productsItemsSetData = (data: IApiProductItems): IReduxProductsActions => ({
  type: rdxProductsActionTypes.PRODUCTS_ITEMS_SET_DATA,
  actionDataProductItems: data,
});

const rdxProductsItemsGetDataAsync = (filters: string[], page: number): IReduxProductsDispatch => async (dispatch: Dispatch<IReduxProductsActions>) => {
  try {
    dispatch(productsItemsGetDataLoading());

    await addSomeDelayAsync(500);

    const items: IApiProductItems | null = await new Api().getProductsByFiltersAndPage(filters, page);

    if (!items) {
      throw new Error();
    }

    if (items.products.length > 0) {
      dispatch(productsItemsSetData(items));
    } else {
      dispatch(productsItemsGetDataNoResults());
    }

    actionWindowScrollToTop();
  } catch {
    dispatch(productsItemsGetDataFailure());
  }
};
// Products Items Get & Set Data: end

export {
  rdxProductsActionTypes,
  rdxProductsSelector,
  rdxProductsFilterSetPageAsync,
  rdxProductsFilterSetSortOrderAsync,
  rdxProductsFilterSetTypeAsync,
  rdxProductsFilterSetBrandsAsync,
  rdxProductsFilterSetTagsAsync,
  rdxProductsTypesGetDataAsync,
  rdxProductsBrandsGetDataAsync,
  rdxProductsTagsGetDataAsync,
  rdxProductsItemsGetDataAsync,
};
