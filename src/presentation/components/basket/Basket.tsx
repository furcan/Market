import { useSelector } from 'react-redux';
import { FiShoppingBag as IconNoData } from 'react-icons/fi';

import { constants } from 'application/constants';
import { convertPriceToLocaleString } from 'application/helpers';
import { rdxProductsSelector } from 'application/redux/products';
import { IReduxBasketItem, rdxBasketSelector } from 'application/redux/basket';

import styles from 'presentation/components/basket/Basket.module.scss';

function Basket(): JSX.Element {
  const { loadingProductItems } = useSelector(rdxProductsSelector);
  const { basketGrandTotal, basketItems } = useSelector(rdxBasketSelector);

  return (
    <div className={[
      styles.basket,
      (loadingProductItems ? (styles['basket--loading'] || '') : ''),
    ].join(' ')}>
      <div className={styles.basket__content}>
        {
          (basketItems.length < 1) &&
          <div className={styles.basket__nodata}>
            <IconNoData className={styles.basket__nodata__icon} />
            <p className={styles.basket__nodata__text}>{constants.text.basket.noData}</p>
          </div>
        }
        {
          (basketItems.length > 0) &&
          <ul className={styles.basket__list}>
            {
              basketItems.map((item: IReduxBasketItem, index: number) => (
                <li key={index} className={styles.basket__list__item}>
                  <p className={styles.basket__list__item__name}>{item.name}</p>
                  <p className={styles.basket__list__item__price}>
                    <span className={styles.basket__list__item__price__currency}>{constants.app.currency}</span>
                    <span className={styles.basket__list__item__price__text}>{convertPriceToLocaleString(item.price)}</span>
                  </p>
                  <div className={styles.basket__list__item__actions}>
                    <span>{`TODO: ${item.quantity}`}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        }
      </div>

      <div className={styles.basket__total}>
        <p className={styles.basket__total__amount}>
          <span className={styles.basket__total__amount__currency}>{constants.app.currency}</span>
          <span className={styles.basket__total__amount__text}>{convertPriceToLocaleString(basketGrandTotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default Basket;
