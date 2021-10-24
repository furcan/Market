import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IApiProductTypes } from 'application/api';
import { rdxProductsSelector, rdxProductsGetTypesAsync, rdxProductsChangeFilterTypeAsync } from 'application/redux/products';

import styles from 'presentation/components/filters/types/Types.module.scss';
import { constants } from 'application/constants';

function Types(): JSX.Element {
  const dispatch = useDispatch();
  const {
    loadingProductTypes,
    failureProductTypes,
    dataProductTypes,
    filterType,
  } = useSelector(rdxProductsSelector);
  const placeholder: string[] = Array(6).fill('');

  useEffect(() => {
    if (loadingProductTypes) {
      dispatch(rdxProductsGetTypesAsync());
    }
  }, [loadingProductTypes, dispatch]);

  const changeFilterTypeOnClickHandler = (filterType: string): void => {
    dispatch(rdxProductsChangeFilterTypeAsync(filterType));
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
        dataProductTypes.length > 0 &&
        dataProductTypes.map((type: IApiProductTypes, index: number) => (
          <button
            key={index}
            onClick={() => changeFilterTypeOnClickHandler(type.queryString)}
            className={[
              styles.types__button,
              (filterType === type.queryString ? (styles['types__button--selected'] || '') : ''),
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
