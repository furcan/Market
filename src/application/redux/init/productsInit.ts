import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { IReduxProductsState } from 'application/redux/products';

const rdxProductsInitialState: IReduxProductsState = {
  filterPage: 1,
  filterSortOrder: EFilterSortOrder.PriceAsc,
  filterType: null,
  filterBrands: null,
  filterTags: null,
  loadingProductTypes: true,
  failureProductTypes: false,
  noResultsProductTypes: false,
  dataProductTypes: [],
  loadingProductBrands: true,
  failureProductBrands: false,
  noResultsProductBrands: false,
  dataProductBrands: [],
  dataProductBrandsTotalCount: 0,
  loadingProductTags: true,
  failureProductTags: false,
  noResultsProductTags: false,
  dataProductTags: [],
  dataProductTagsTotalCount: 0,
  loadingProductItems: true,
  failureProductItems: false,
  noResultsProductItems: false,
  dataProductItems: [],
  dataProductItemsTotalCount: 0,
};

export {
  rdxProductsInitialState,
};
