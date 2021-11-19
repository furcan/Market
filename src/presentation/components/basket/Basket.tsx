import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingBag as IconNoData, FiTrash2 as IconDelete } from 'react-icons/fi';

import { constants } from 'application/constants';
import { convertPriceToLocaleString } from 'application/helpers';
import { rdxProductsSelector } from 'application/redux/products';
import { IReduxBasketItem, IReduxBasketItemUpdate, rdxBasketSelector, rdxBasketIncraseItemQuantityAsync, rdxBasketDecreaseItemQuantityAsync } from 'application/redux/basket';

import IconMinus from 'presentation/components/icons/IconMinus';
import IconPlus from 'presentation/components/icons/IconPlus';

import styles from 'presentation/components/basket/Basket.module.scss';

function Basket(): JSX.Element {
  const dispatch = useDispatch();
  const { loadingProductItems } = useSelector(rdxProductsSelector);
  const { basketGrandTotal, basketItems } = useSelector(rdxBasketSelector);


  const decreaseItemQuantityThatInTheBasketOnClickHandler = (data: IReduxBasketItemUpdate): void => {
    dispatch(rdxBasketDecreaseItemQuantityAsync(data));
  };

  const increaseItemQuantityThatInTheBasketOnClickHandler = (data: IReduxBasketItemUpdate): void => {
    dispatch(rdxBasketIncraseItemQuantityAsync(data));
  };


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
                    <button
                      type="button"
                      onClick={() => decreaseItemQuantityThatInTheBasketOnClickHandler({
                        slug: item.slug,
                        quantity: 1,
                      })}
                      className={styles.basket__list__item__actions__button}
                    >
                      {item.quantity > 1 && <IconMinus className={styles.basket__list__item__actions__button__icon} />}
                      {item.quantity < 2 && <IconDelete className={styles.basket__list__item__actions__button__icon} />}
                    </button>
                    <span className={styles.basket__list__item__actions__quantity}>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => increaseItemQuantityThatInTheBasketOnClickHandler({
                        slug: item.slug,
                        quantity: 1,
                      })}
                      className={styles.basket__list__item__actions__button}
                    >
                      <IconPlus className={styles.basket__list__item__actions__button__icon} />
                    </button>
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
