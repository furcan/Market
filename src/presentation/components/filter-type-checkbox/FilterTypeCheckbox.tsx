import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiInfo as IconNoData, FiAlertTriangle as IconFailure, FiX as IconClear } from 'react-icons/fi';

import { constants } from 'application/constants';
import { IApiProductBrand, IApiProductTag } from 'application/api';
import { rdxProductsSelector } from 'application/redux/products';

import IconCheck from 'presentation/components/icons/IconCheck';

import styles from 'presentation/components/filter-type-checkbox/FilterTypeCheckbox.module.scss';

interface IFilterTypeCheckbox {
  title: string;
  itemsLoading: boolean;
  itemsFailure: boolean;
  itemsNoResults: boolean;
  items: IApiProductBrand[] | IApiProductTag[];
  itemsSelected: string | null;
  itemsTotalCount: number;
  withSearch?: boolean;
  withMargin?: boolean;
  placeholderSearchInput: string;
  onClicksDispatcher: (filterParam: string | null) => void;
}

function FilterTypeCheckbox({
  title,
  itemsLoading,
  itemsFailure,
  itemsNoResults,
  items,
  itemsSelected,
  itemsTotalCount,
  withSearch,
  placeholderSearchInput,
  withMargin,
  onClicksDispatcher,
}: IFilterTypeCheckbox): JSX.Element {
  const { loadingProductItems } = useSelector(rdxProductsSelector);
  const placeholder: string[] = Array((constants.api.limitProductsBrands)).fill('');

  // Filters: begin
  const [stateFilters, setStateFilters] = useState<string | null>(itemsSelected);
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
  // Filters: end

  // SearchTerm: begin
  const [stateSearchTerm, setStateSearchTerm] = useState<string>('');
  const setSearchTermOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target instanceof HTMLInputElement) {
      setStateSearchTerm(event.target.value);
    }
  };
  const clearSearchTermOnClickHandler = (): void => {
    setStateSearchTerm('');
  };
  // SearchTerm: end


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
            <input
              type="text"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder={placeholderSearchInput || ''}
              value={stateSearchTerm}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTermOnChangeHandler(event)}
              className={styles.ft_checkbox__search__input}
            />
            {
              (stateSearchTerm.length > 0) &&
              <button
                type="button"
                onClick={clearSearchTermOnClickHandler}
                className={styles.ft_checkbox__search__clear}
              >
                <IconClear className={styles.ft_checkbox__search__clear__icon} />
              </button>
            }
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
            (itemsFailure || itemsNoResults) &&
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
            (!itemsLoading && !itemsFailure && !itemsNoResults) &&
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
                items
                  .filter((item) => item.name.toLocaleLowerCase(constants.app.language).includes(stateSearchTerm.toLocaleLowerCase(constants.app.language)))
                  .map((item: IApiProductBrand | IApiProductTag, index: number) => (
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
