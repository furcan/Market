import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IApiProductType } from 'application/api';
import { rdxProductsSelector, rdxProductsTypesGetDataAsync, rdxProductsFilterSetTypeAsync } from 'application/redux/products';

import styles from 'presentation/components/filters/types/Types.module.scss';
import { constants } from 'application/constants';

function Types(): JSX.Element {
  const dispatch = useDispatch();
  const {
    loadingProductItems,
    loadingProductTypes,
    failureProductTypes,
    dataProductTypes,
    filterType,
  } = useSelector(rdxProductsSelector);
  const placeholder: string[] = Array((dataProductTypes.length || 6)).fill('');

  useEffect(() => {
    if (loadingProductTypes) {
      dispatch(rdxProductsTypesGetDataAsync());
    }
  }, [loadingProductTypes, dispatch]);

  const changeFilterTypeOnClickHandler = (filterType: string): void => {
    dispatch(rdxProductsFilterSetTypeAsync(filterType));
  };

  return (
    <div className={styles.types}>
      {
        loadingProductTypes &&
        placeholder.map((_, index) => <span key={index} className={[styles.types__button, styles['types__button--placeholder'] || ''].join(' ')}></span>)
      }
      {
        failureProductTypes &&
        <p className={styles.types__failure}>{constants.text.common.failure}</p>
      }
      {
        (!loadingProductTypes && !failureProductTypes && dataProductTypes.length > 0) &&
        dataProductTypes.map((type: IApiProductType, index: number) => (
          <button
            key={index}
            onClick={() => changeFilterTypeOnClickHandler(type.queryString)}
            className={[
              styles.types__button,
              (filterType === type.queryString ? (styles['types__button--selected'] || '') : ''),
              (loadingProductItems ? (styles['types__button--disabled'] || '') : ''),
            ].join(' ')}
          >
            <span>{type.name}</span>
          </button>
        ))
      }
    </div>
  );
}

export default Types;
