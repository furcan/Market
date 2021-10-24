import { useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { rdxMarketSelector } from 'application/redux/market';

import Types from 'presentation/components/filters/types/Types';

import styles from 'presentation/screens/products/Products.module.scss';

function Products(): JSX.Element {
  const { isFiltersVisible, isBasketVisible } = useSelector(rdxMarketSelector);

  return (
    <div className={styles.products}>
      <div className={[
        styles.products__filters,
        (isFiltersVisible ? (styles['products__filters--visible'] || '') : ''),
      ].join(' ')}>
        <h1>Filters</h1>
      </div>
      <div className={styles.products__content}>
        <h2 className={styles.products__content__title}>{constants.text.products.mainTitle}</h2>
        <Types />
        <h1>TODO</h1>
        <h1>TODO</h1>
        <h1>TODO</h1>
        <h1>TODO</h1>
      </div>
      <div className={[
        styles.products__basket,
        (isBasketVisible ? (styles['products__basket--visible'] || '') : ''),
      ].join(' ')}>
        <h1>Basket</h1>
      </div>
    </div>
  );
}

export default Products;
