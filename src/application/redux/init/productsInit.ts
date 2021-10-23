import { EFilterSortOrder } from 'application/enumerations/filter-sort-order';
import { IReduxProductsState } from 'application/redux/products';

const rdxProductsInitialState: IReduxProductsState = {
  filterSortOrder: EFilterSortOrder.PriceAsc,
  filterType: null,
  filterBrands: null,
  filterTags: null,
  dataProductTypes: [],
  dataProductBrands: [],
  dataProductTags: [],
};

export {
  rdxProductsInitialState,
};
