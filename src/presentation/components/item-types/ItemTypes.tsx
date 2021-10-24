import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { constants } from 'application/constants';
import { IApiProductType } from 'application/api';
import { rdxProductsSelector, rdxProductsTypesGetDataAsync, rdxProductsFilterSetTypeAsync } from 'application/redux/products';

import styles from 'presentation/components/item-types/ItemTypes.module.scss';

function ItemTypes(): JSX.Element {
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
    <div className={styles.itemtypes}>
      {
        loadingProductTypes &&
        placeholder.map((_, index) => <span key={index} className={[styles.itemtypes__button, styles['itemtypes__button--placeholder'] || ''].join(' ')}></span>)
      }
      {
        failureProductTypes &&
        <p className={styles.itemtypes__failure}>{constants.text.common.failure}</p>
      }
      {
        (!loadingProductTypes && !failureProductTypes && dataProductTypes.length > 0) &&
        dataProductTypes.map((type: IApiProductType, index: number) => (
          <button
            key={index}
            onClick={() => changeFilterTypeOnClickHandler(type.queryString)}
            className={[
              styles.itemtypes__button,
              (loadingProductItems ? (styles['itemtypes__button--disabled'] || '') : ''),
              (filterType === type.queryString ? (styles['itemtypes__button--selected'] || '') : ''),
            ].join(' ')}
          >
            <span>{type.name}</span>
          </button>
        ))
      }
    </div>
  );
}

export default ItemTypes;
