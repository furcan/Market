import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiInfo as IconNoData, FiAlertTriangle as IconFailure } from 'react-icons/fi';

import { constants } from 'application/constants';
import { convertPriceToLocaleString } from 'application/helpers';
import { IApiProductItem } from 'application/api';
import { rdxProductsSelector, rdxProductsItemsGetDataAsync } from 'application/redux/products';
import { IReduxBasketItem, IReduxBasketItemUpdate, rdxBasketSelector, rdxBasketAddItemAsync, rdxBasketIncraseItemQuantityAsync } from 'application/redux/basket';

import styles from 'presentation/components/items/Items.module.scss';

function Products(): JSX.Element {
  const dispatch = useDispatch();
  const {
    filterPage,
    filterSortOrder,
    filterType,
    filterBrands,
    filterTags,
    loadingProductItems,
    failureProductItems,
    noResultsProductItems,
    dataProductItems,
  } = useSelector(rdxProductsSelector);
  const { basketItems } = useSelector(rdxBasketSelector);
  const placeholder: string[] = Array(constants.api.limitProductsItems).fill('');

  // Products: Get Items by Filters: begin
  useEffect(() => {
    if (filterType) {
      dispatch(rdxProductsItemsGetDataAsync(
        [
          filterSortOrder,
          filterType,
          (filterBrands || ''),
          (filterTags || ''),
        ],
        filterPage,
      ));
    }
  }, [
    dispatch,
    filterPage,
    filterSortOrder,
    filterType,
    filterBrands,
    filterTags,
  ]);
  // Products: Get Items by Filters: end


  // Basket: Add Item && Incrase Item Quantity: begin
  const updateItemQuantityThatInTheBasketOnClickHandler = (data: IReduxBasketItemUpdate): void => {
    dispatch(rdxBasketIncraseItemQuantityAsync(data));
  };

  const addItemToTheBasketOnClickHandler = (item: IReduxBasketItem): void => {
    dispatch(rdxBasketAddItemAsync(item));
  };
  // Basket: Add Item && Incrase Item Quantity: end


  return (
    <div className={[
      styles.items,
      (loadingProductItems ? (styles['items--loading'] || '') : ''),
    ].join(' ')}>
      {
        (loadingProductItems && dataProductItems.length < 1) &&
        placeholder.map((_, index) => <div key={index} className={[styles.items__single, styles['items__single--placeholder'] || ''].join(' ')}></div>)
      }
      {
        (failureProductItems) &&
        <div className={[styles.items__single, styles['items__single--failure'] || ''].join(' ')}>
          <IconFailure className={styles['items__single--failure__icon'] || ''} />
          <p className={styles['items__single--failure__message'] || ''}>{constants.text.common.failure}</p>
        </div>
      }
      {
        (noResultsProductItems) &&
        <div className={[styles.items__single, styles['items__single--nodata'] || ''].join(' ')}>
          <IconNoData className={styles['items__single--nodata__icon'] || ''} />
          <p className={styles['items__single--nodata__message'] || ''}>{constants.text.common.noData}</p>
        </div>
      }
      {
        (!failureProductItems && !noResultsProductItems) &&
        dataProductItems.map((dataItem: IApiProductItem, index: number) => {
          const isItemInTheBasket = basketItems.find((basketItem: IReduxBasketItem) => basketItem.slug === dataItem.slug) !== undefined;

          return (
            <div
              key={index}
              className={styles.items__single}
            >
              <div className={styles.items__single__media}>
                <img
                  className={styles.items__single__media__image}
                  width="100"
                  height="100"
                  src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/9APCGXRuQAAACpJREFUeJztwTEBAAAAwqD1T+1vBqAAAAAAAAAAAAAAAAAAAAAAAAAAgDdPsAABORaXeAAAAABJRU5ErkJggg==`}
                  alt={constants.app.name}
                />
              </div>
              <p className={styles.items__single__price}>
                <span className={styles.items__single__price__currency}>{constants.app.currency}</span>
                <span>{convertPriceToLocaleString(dataItem.price)}</span>
              </p>
              <h2 className={styles.items__single__title}>{dataItem.name}</h2>
              <button
                type="button"
                onClick={
                  isItemInTheBasket ?
                    () => updateItemQuantityThatInTheBasketOnClickHandler({
                      slug: dataItem.slug,
                      quantity: 1,
                    })
                    :
                    () => addItemToTheBasketOnClickHandler({
                      slug: dataItem.slug,
                      name: dataItem.name,
                      price: dataItem.price,
                      quantity: 1,
                    })
                }
                className={styles.items__single__button}
              >
                <span>{constants.text.products.buttonAdd}</span>
              </button>
            </div>
          );
        })
      }
    </div>
  );
}

export default Products;
