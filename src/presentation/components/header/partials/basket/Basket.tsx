import { useDispatch, useSelector } from 'react-redux';

import { rdxMarketSelector, rdxMarketBasketVisibilityAsync } from 'application/redux/market';

import { constants } from 'application/constants';
import { convertPriceToLocaleString } from 'application/helpers';

import IconBasket from 'presentation/components/icons/IconBasket';

import styles from 'presentation/components/header/partials/basket/Basket.module.scss';

function Basket(): JSX.Element {
  const dispatch = useDispatch();
  const { isBasketVisible } = useSelector(rdxMarketSelector);

  const toggleBasketOnClickHandler = (): void => {
    dispatch(rdxMarketBasketVisibilityAsync(!isBasketVisible));
  };

  const todoAmountFromRedux = 0.00;

  return (
    <button
      type="button"
      onClick={toggleBasketOnClickHandler}
      className={styles.basket}
    >
      <IconBasket className={styles.basket__icon} />
      <span className={styles.basket__amount}>
        <span className={styles.basket__amount__currency}>{constants.app.currency}</span>
        <span>{convertPriceToLocaleString(todoAmountFromRedux)}</span>
      </span>
    </button>
  );
}

export default Basket;
