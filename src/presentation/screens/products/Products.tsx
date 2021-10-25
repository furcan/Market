import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { EFilterSortOrder, getFilterSortOrderText } from 'application/enumerations/filter-sort-order';
import { rdxMarketSelector, rdxMarketFiltersVisibilityAsync } from 'application/redux/market';
import { rdxProductsSelector, rdxProductsBrandsGetDataAsync, rdxProductsFilterSetSortOrderAsync, rdxProductsFilterSetBrandsAsync } from 'application/redux/products';

import FilterSorting from 'presentation/components/filter-type-radio/FilterTypeRadio';
import FilterBrands from 'presentation/components/filter-type-checkbox/FilterTypeCheckbox';
// import FilterTags from 'presentation/components/filter-type-checkbox/FilterTypeCheckbox'; // TODO
import ItemTypes from 'presentation/components/item-types/ItemTypes';
import Items from 'presentation/components/items/Items';
import ItemsPagination from 'presentation/components/items-pagination/ItemsPagination';

import styles from 'presentation/screens/products/Products.module.scss';

function Products(): JSX.Element {
  const dispatch = useDispatch();
  const { isFiltersVisible, isBasketVisible } = useSelector(rdxMarketSelector);
  const {
    loadingProductBrands,
    failureProductBrands,
    dataProductBrands,
    dataProductBrandsTotalCount,
    // loadingProductTags, // TODO
    // failureProductTags, // TODO
    filterSortOrder,
  } = useSelector(rdxProductsSelector);

  // Filter Brands & Tags Get Data: begin
  useEffect(() => {
    if (loadingProductBrands) {
      dispatch(rdxProductsBrandsGetDataAsync());
    }
    // if (loadingProductTags) {
    //   console.log('TODO: Get Tags');
    // }
  }, [dispatch, loadingProductBrands]);
  // Filter Brands & Tags Get Data: end

  // Filter SortOrder OnClick Handler: begin
  const changeFilterSortOrderOnClickHandler = (sortOrder: string): void => {
    dispatch(rdxProductsFilterSetSortOrderAsync(sortOrder as EFilterSortOrder));
    dispatch(rdxMarketFiltersVisibilityAsync(false));
  };
  // Filter SortOrder OnClick Handler: end

  // Filter Brands OnClicks Handler: begin
  const changeFilterBrandsOnClicksHandler = (brands: string | null): void => {
    dispatch(rdxProductsFilterSetBrandsAsync(brands));
    dispatch(rdxMarketFiltersVisibilityAsync(false));
  };
  // Filter Brands OnClicks Handler: end

  return (
    <div className={styles.products}>
      <div className={[
        styles.products__filters,
        (isFiltersVisible ? (styles['products__filters--visible'] || '') : ''),
      ].join(' ')}>
        <FilterSorting
          title={constants.text.filters.titleSorting}
          items={Object.values(EFilterSortOrder)}
          activeItem={filterSortOrder}
          extractorItemText={getFilterSortOrderText}
          onClickDispatcher={changeFilterSortOrderOnClickHandler}
        />
        <FilterBrands
          withSearch
          withMargin
          title={constants.text.filters.titleBrands}
          itemsLoading={loadingProductBrands}
          itemsFailure={failureProductBrands}
          items={dataProductBrands}
          itemsTotalCount={dataProductBrandsTotalCount}
          onClicksDispatcher={changeFilterBrandsOnClicksHandler}
        />
        {/* <FilterTags
          withSearch
          withMargin
          title={constants.text.filters.titleTags}
          itemsLoading={loadingProductTags}
          itemsFailure={failureProductTags}
        /> */}
      </div>
      <div className={styles.products__content}>
        <h1 className={styles.products__content__title}>{constants.text.products.mainTitle}</h1>
        <ItemTypes />
        <Items />
        <ItemsPagination />
      </div>
      <div className={[
        styles.products__basket,
        (isBasketVisible ? (styles['products__basket--visible'] || '') : ''),
      ].join(' ')}>
        <h1>Basket</h1>
      </div>
    </div>
  );
}

export default Products;
