import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { IReduxProductsState } from 'application/redux/products';

const rdxProductsInitialState: IReduxProductsState = {
  filterPage: 1,
  filterSortOrder: EFilterSortOrder.PriceAsc,
  filterType: null,
  filterBrands: null,
  filterTags: null,
  loadingProductTypes: true,
  loadingProductBrands: true,
  loadingProductTags: true,
  loadingProductItems: true,
  failureProductTypes: false,
  failureProductBrands: false,
  failureProductTags: false,
  failureProductsItems: false,
  dataProductTypes: [],
  dataProductBrands: [],
  dataProductTags: [],
  dataProductItems: [],
  dataProductItemsTotalCount: 0,
};

export {
  rdxProductsInitialState,
};
