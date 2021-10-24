import { useSelector } from 'react-redux';

import { rdxProductsSelector } from 'application/redux/products';

import IconCheck from 'presentation/components/icons/IconCheck';

import styles from 'presentation/components/filter-type-radio/FilterTypeRadio.module.scss';

interface IFilterTypeRadio {
  title: string;
  items: string[];
  activeItem: string;
  extractorItemText: (param: string) => string;
  onClickDispatcher: (filterParam: string) => void;
}

function FilterTypeRadio({
  title,
  items,
  activeItem,
  extractorItemText,
  onClickDispatcher,
}: IFilterTypeRadio): JSX.Element {
  const { loadingProductItems } = useSelector(rdxProductsSelector);

  return (
    <div className={[
      styles.ft_radio,
      (loadingProductItems ? (styles['ft_radio--loading'] || '') : ''),
    ].join(' ')}>
      <h3 className={styles.ft_radio__title}>{title}</h3>
      <div className={styles.ft_radio__content}>
        <ul className={styles.ft_radio__list}>
          {
            items.map((item: string, index: number) => (
              <li key={index} className={styles.ft_radio__list__item}>
                <button
                  type="button"
                  onClick={activeItem === item ? undefined : () => onClickDispatcher(item)}
                  className={[
                    styles.ft_radio__list__item__button,
                    (activeItem === item ? (styles['ft_radio__list__item__button--selected'] || '') : ''),
                  ].join(' ')}
                >
                  {activeItem === item && <IconCheck className={styles.ft_radio__list__item__button__icon} />}
                </button>
                <span className={styles.ft_radio__list__item__text}>{extractorItemText(item)}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );

}

export default FilterTypeRadio;
