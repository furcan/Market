import { useDispatch, useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { generatorPaginationItems } from 'application/helpers';
import { rdxProductsSelector, rdxProductsFilterSetPageAsync } from 'application/redux/products';

import IconArrowLeft from 'presentation/components/icons/IconArrowLeft';
import IconArrowRight from 'presentation/components/icons/IconArrowRight';

import styles from 'presentation/components/items-pagination/ItemsPagination.module.scss';

function ItemsPagination(): JSX.Element {
  const dispatch = useDispatch();
  const {
    filterPage,
    loadingProductItems,
    failureProductItems,
    dataProductItemsTotalCount,
  } = useSelector(rdxProductsSelector);

  if (dataProductItemsTotalCount < 1 && loadingProductItems) {
    return <div className={[styles.itemspagination, (styles['itemspagination--placeholder'] || '')].join(' ')}></div>;
  }

  if (dataProductItemsTotalCount < 1 || failureProductItems) {
    return <></>;
  }

  const changeFilterPageOnClickHandler = (pageNumber: number) => {
    dispatch(rdxProductsFilterSetPageAsync(pageNumber));
  };

  const paginationItems = generatorPaginationItems(filterPage, dataProductItemsTotalCount);
  return (
    <div className={[
      styles.itemspagination,
      (loadingProductItems ? (styles['itemspagination--loading'] || '') : ''),
    ].join(' ')}>
      {
        <button
          type="button"
          disabled={filterPage === paginationItems.items[0]}
          onClick={filterPage === paginationItems.items[0] ? undefined : () => changeFilterPageOnClickHandler(filterPage - 1)}
          className={styles.itemspagination__prev}
        >
          <IconArrowLeft className={styles.itemspagination__prev__icon} />
          <span>{constants.text.products.buttonPrev}</span>
        </button>
      }
      {
        paginationItems.items.map((item: number | string, index: number) => {
          if (typeof item === 'number') {
            return (
              <button
                key={index}
                type="button"
                onClick={filterPage === item ? undefined : () => changeFilterPageOnClickHandler(item)}
                className={[
                  styles.itemspagination__button,
                  (filterPage === item ? (styles['itemspagination__button--selected'] || '') : ''),
                ].join(' ')}
              >
                <span>{item}</span>
              </button>
            );
          }
          return <span key={index} className={styles.itemspagination__seperator}>{item}</span>;
        })
      }
      {
        <button
          type="button"
          disabled={filterPage === paginationItems.items.pop()}
          onClick={filterPage === paginationItems.items.pop() ? undefined : () => changeFilterPageOnClickHandler(filterPage + 1)}
          className={styles.itemspagination__next}
        >
          <span>{constants.text.products.buttonNext}</span>
          <IconArrowRight className={styles.itemspagination__next__icon} />
        </button>
      }
    </div>
  );
}

export default ItemsPagination;
