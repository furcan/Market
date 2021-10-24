import { useDispatch, useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { generatorPaginationItems } from 'application/helpers';
import { rdxProductsSelector, rdxProductsFilterSetPageAsync } from 'application/redux/products';

import IconArrowLeft from 'presentation/components/icons/IconArrowLeft';
import IconArrowRight from 'presentation/components/icons/IconArrowRight';

import styles from 'presentation/components/pagination/Pagination.module.scss';

function Pagination(): JSX.Element {
  const dispatch = useDispatch();
  const {
    filterPage,
    loadingProductItems,
    failureProductsItems,
    dataProductItemsTotalCount,
  } = useSelector(rdxProductsSelector);

  if (dataProductItemsTotalCount < 1 && loadingProductItems) {
    return <div className={[styles.pagination, (styles['pagination--placeholder'] || '')].join(' ')}></div>;
  }

  if (dataProductItemsTotalCount < 1 || failureProductsItems) {
    return <></>;
  }

  const changeFilterPageOnClickHandler = (pageNumber: number) => {
    dispatch(rdxProductsFilterSetPageAsync(pageNumber));
  };

  const paginationItems = generatorPaginationItems(filterPage, dataProductItemsTotalCount);
  return (
    <div className={[
      styles.pagination,
      (loadingProductItems ? (styles['pagination--loading'] || '') : ''),
    ].join(' ')}>
      {
        <button
          type="button"
          disabled={filterPage === paginationItems.items[0]}
          onClick={filterPage === paginationItems.items[0] ? undefined : () => changeFilterPageOnClickHandler(filterPage - 1)}
          className={styles.pagination__prev}
        >
          <IconArrowLeft className={styles.pagination__prev__icon} />
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
                onClick={filterPage !== item ? () => changeFilterPageOnClickHandler(item) : undefined}
                className={[
                  styles.pagination__button,
                  (filterPage === item ? (styles['pagination__button--selected'] || '') : ''),
                ].join(' ')}
              >
                <span>{item}</span>
              </button>
            );
          }
          return <span key={index} className={styles.pagination__seperator}>{item}</span>;
        })
      }
      {
        <button
          type="button"
          disabled={filterPage === paginationItems.items.pop()}
          onClick={filterPage === paginationItems.items.pop() ? undefined : () => changeFilterPageOnClickHandler(filterPage + 1)}
          className={styles.pagination__next}
        >
          <span>{constants.text.products.buttonNext}</span>
          <IconArrowRight className={styles.pagination__next__icon} />
        </button>
      }
    </div>
  );
}

export default Pagination;
