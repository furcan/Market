import { useDispatch, useSelector } from 'react-redux';

import { rdxMarketSelector, rdxMarketBasketVisibilityAsync } from 'application/redux/market';
import { rdxBasketSelector } from 'application/redux/basket';

import { constants } from 'application/constants';
import { convertPriceToLocaleString } from 'application/helpers';

import IconBasket from 'presentation/components/icons/IconBasket';

import styles from 'presentation/components/header-basket/HeaderBasket.module.scss';

function HeaderBasket(): JSX.Element {
  const dispatch = useDispatch();
  const { marketIsBasketVisible } = useSelector(rdxMarketSelector);
  const { basketGrandTotal } = useSelector(rdxBasketSelector);

  const toggleBasketOnClickHandler = (): void => {
    dispatch(rdxMarketBasketVisibilityAsync(!marketIsBasketVisible));
  };

  return (
    <button
      type="button"
      onClick={toggleBasketOnClickHandler}
      className={styles.headerbasket}
    >
      <IconBasket className={styles.headerbasket__icon} />
      <span className={styles.headerbasket__amount}>
        <span className={styles.headerbasket__amount__currency}>{constants.app.currency}</span>
        <span>{convertPriceToLocaleString(basketGrandTotal)}</span>
      </span>
    </button>
  );
}

export default HeaderBasket;
