import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiInfo as IconNoData, FiAlertTriangle as IconFailure } from 'react-icons/fi';

import { constants } from 'application/constants';
import { IApiProductBrand, IApiProductTag } from 'application/api';
import { rdxProductsSelector } from 'application/redux/products';

import IconCheck from 'presentation/components/icons/IconCheck';

import styles from 'presentation/components/filter-type-checkbox/FilterTypeCheckbox.module.scss';

interface IFilterTypeCheckbox {
  withSearch: boolean;
  withMargin: boolean;
  title: string;
  itemsLoading: boolean;
  itemsFailure: boolean;
  items: IApiProductBrand[] | IApiProductTag[];
  itemsTotalCount: number;
  onClicksDispatcher: (filterParam: string | null) => void;
}

function FilterTypeCheckbox({
  withSearch,
  withMargin,
  title,
  itemsLoading,
  itemsFailure,
  items,
  itemsTotalCount,
  onClicksDispatcher,
}: IFilterTypeCheckbox): JSX.Element {
  const { loadingProductItems } = useSelector(rdxProductsSelector);
  const placeholder: string[] = Array((constants.api.limitProductsBrands)).fill('');

  const [stateFilters, setStateFilters] = useState<string | null>(null);

  const updateStateFiltersOnClickHandler = (filter: string | null): void => {
    if (stateFilters && filter) {
      let filters = null;
      if (!stateFilters.includes(filter)) {
        filters = stateFilters.split('&').concat(filter);
      } else {
        filters = stateFilters.split('&').concat();
        filters.splice(filters.indexOf(filter), 1);
      }
      const filtersOrNull = filters.join('&') || null;
      setStateFilters(filtersOrNull);
      onClicksDispatcher(filtersOrNull);
    } else {
      setStateFilters(filter);
      onClicksDispatcher(filter);
    }
  };


  return (
    <div className={[
      styles.ft_checkbox,
      (withMargin ? (styles['ft_checkbox--withmargin'] || '') : ''),
      (loadingProductItems ? (styles['ft_checkbox--loading'] || '') : ''),
    ].join(' ')}>
      <h3 className={styles.ft_checkbox__title}>{title}</h3>
      <div className={styles.ft_checkbox__content}>
        {
          (withSearch && !itemsFailure) &&
          <div className={[
            styles.ft_checkbox__search,
            ((itemsLoading || items.length < 1) ? (styles['ft_checkbox__search--disabled'] || '') : ''),
          ].join(' ')}>
            <p>TODO: Search</p>
          </div>
        }
        <ul className={styles.ft_checkbox__list}>
          {
            itemsLoading &&
            placeholder.map((_, index: number) => (
              <li key={index} className={[
                styles.ft_checkbox__list__item,
                (styles['ft_checkbox__list__item--placeholder'] || ''),
              ].join(' ')}></li>
            ))
          }
          {
            (itemsFailure || (!itemsLoading && items.length < 1)) &&
            <li className={[
              styles.ft_checkbox__list__item,
              (styles['ft_checkbox__list__item--exception'] || ''),
            ].join(' ')}>
              {
                itemsFailure
                  ?
                  <IconFailure className={styles['ft_checkbox__list__item--exception__icon--failure'] || ''} />
                  :
                  <IconNoData className={styles['ft_checkbox__list__item--exception__icon--nodata'] || ''} />
              }
              <span className={styles['ft_checkbox__list__item--exception__text'] || ''}>{(
                itemsFailure ? constants.text.common.failure : constants.text.common.noData
              )}</span>
            </li>
          }
          {
            (!itemsLoading && !itemsFailure && items.length > 1) &&
            <>
              <li className={styles.ft_checkbox__list__item}>
                <button
                  type="button"
                  onClick={() => updateStateFiltersOnClickHandler(null)}
                  className={[
                    styles.ft_checkbox__list__item__button,
                    (!stateFilters ? (styles['ft_checkbox__list__item__button--selected'] || '') : ''),
                  ].join(' ')}
                >
                  {!stateFilters && <IconCheck className={styles.ft_checkbox__list__item__button__icon} />}
                </button>
                <span className={styles.ft_checkbox__list__item__text}>
                  <span>{constants.text.filters.buttonAll}</span>
                  {itemsTotalCount > 0 && <span className={styles.ft_checkbox__list__item__text__count}>{`(${itemsTotalCount})`}</span>}
                </span>
              </li>
              {
                items.map((item: IApiProductBrand | IApiProductTag, index: number) => (
                  <li key={index} className={styles.ft_checkbox__list__item}>
                    <button
                      type="button"
                      onClick={() => updateStateFiltersOnClickHandler(item.queryString)}
                      className={[
                        styles.ft_checkbox__list__item__button,
                        (stateFilters?.includes(item.queryString) ? (styles['ft_checkbox__list__item__button--selected'] || '') : ''),
                      ].join(' ')}
                    >
                      {stateFilters?.includes(item.queryString) && <IconCheck className={styles.ft_checkbox__list__item__button__icon} />}
                    </button>
                    <span className={styles.ft_checkbox__list__item__text}>
                      <span>{item.name}</span>
                      <span className={styles.ft_checkbox__list__item__text__count}>{`(${item.relatedProductsCount})`}</span>
                    </span>
                  </li>
                ))
              }
            </>
          }
        </ul>
      </div>
    </div>
  );

}

export default FilterTypeCheckbox;
