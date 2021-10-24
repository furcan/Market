import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { IReduxProductsState } from 'application/redux/products';

const rdxProductsInitialState: IReduxProductsState = {
  filterSortOrder: EFilterSortOrder.PriceAsc,
  filterType: null,
  filterBrands: null,
  filterTags: null,
  loadingProductTypes: true,
  loadingProductBrands: true,
  loadingProductTags: true,
  failureProductTypes: false,
  failureProductBrands: false,
  failureProductTags: false,
  dataProductTypes: [],
  dataProductBrands: [],
  dataProductTags: [],
};

export {
  rdxProductsInitialState,
};
