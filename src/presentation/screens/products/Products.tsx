import { useDispatch, useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { EFilterSortOrder, getFilterSortOrderText } from 'application/enumerations/filter-sort-order';
import { rdxMarketSelector, rdxMarketFiltersVisibilityAsync } from 'application/redux/market';
import { rdxProductsSelector, rdxProductsFilterSetSortOrderAsync } from 'application/redux/products';

import FilterTypeRadio from 'presentation/components/filter-type-radio/FilterTypeRadio';
import ItemTypes from 'presentation/components/item-types/ItemTypes';
import Items from 'presentation/components/items/Items';
import ItemsPagination from 'presentation/components/items-pagination/ItemsPagination';

import styles from 'presentation/screens/products/Products.module.scss';

function Products(): JSX.Element {
  const dispatch = useDispatch();
  const { isFiltersVisible, isBasketVisible } = useSelector(rdxMarketSelector);
  const { filterSortOrder } = useSelector(rdxProductsSelector);

  // Filter SortOrder OnClick Handler: begin
  const changeFilterSortOrderOnClickHandler = (sortOrder: string): void => {
    dispatch(rdxProductsFilterSetSortOrderAsync(sortOrder as EFilterSortOrder));
    dispatch(rdxMarketFiltersVisibilityAsync(false));
  };
  // Filter SortOrder OnClick Handler: end

  return (
    <div className={styles.products}>
      <div className={[
        styles.products__filters,
        (isFiltersVisible ? (styles['products__filters--visible'] || '') : ''),
      ].join(' ')}>
        <FilterTypeRadio
          title={constants.text.filters.titleSorting}
          items={Object.values(EFilterSortOrder)}
          activeItem={filterSortOrder}
          extractorItemText={getFilterSortOrderText}
          onClickDispatcher={changeFilterSortOrderOnClickHandler}
        />
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
