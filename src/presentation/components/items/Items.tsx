import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiAlertTriangle as IconFailure } from 'react-icons/fi';

import { constants } from 'application/constants';
import { convertPriceToLocaleString } from 'application/helpers';
import { rdxProductsSelector, rdcProductsItemsGetDataAsync } from 'application/redux/products';

import styles from 'presentation/components/items/Items.module.scss';
import { IApiProductItem } from 'application/api';

function Products(): JSX.Element {
  const dispatch = useDispatch();
  const {
    filterPage,
    filterType,
    filterSortOrder,
    loadingProductItems,
    failureProductsItems,
    dataProductItems,
  } = useSelector(rdxProductsSelector);
  const placeholder: string[] = Array(constants.api.productsLimit).fill('');

  useEffect(() => { // TODO, FILTERS WILL BE CHANGED
    if (filterType && filterSortOrder) {
      dispatch(rdcProductsItemsGetDataAsync(
        [filterType, filterSortOrder],
        filterPage,
      ));
    }
  }, [
    dispatch,
    filterPage,
    filterType,
    filterSortOrder,
  ]);

  return (
    <div className={styles.items}>
      {
        loadingProductItems &&
        placeholder.map((_, index) => <div key={index} className={[styles.items__single, styles['items__single--placeholder'] || ''].join(' ')}></div>)
      }
      {
        failureProductsItems &&
        <div className={[styles.items__single, styles['items__single--failure'] || ''].join(' ')}>
          <IconFailure className={styles['items__single--failure__icon'] || ''} />
          <p className={styles['items__single--failure__message'] || ''}>{constants.text.common.failure}</p>
        </div>
      }
      {
        (!loadingProductItems && !failureProductsItems && dataProductItems.length > 0) &&
        dataProductItems.map((item: IApiProductItem, index: number) => (
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
              <span>{convertPriceToLocaleString(item.price)}</span>
            </p>
            <h3 className={styles.items__single__title}>{item.name}</h3>
            <button
              type="button"
              onClick={() => alert('TODO: ADD TO BASKET => REDUX')}
              className={styles.items__single__button}
            >
              <span>{constants.text.products.buttonAdd}</span>
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Products;
