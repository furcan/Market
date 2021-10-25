import { useDispatch, useSelector } from 'react-redux';
import { FiMenu as IconMenu, FiX as IconClose } from 'react-icons/fi';

import { rdxMarketSelector, rdxMarketFiltersVisibilityAsync } from 'application/redux/market';

import styles from 'presentation/components/header/partials/menu/Menu.module.scss';

function Menu(): JSX.Element {
  const dispatch = useDispatch();
  const { marketIsFilterVisible } = useSelector(rdxMarketSelector);

  const toggleFilterOnClickHandler = (): void => {
    dispatch(rdxMarketFiltersVisibilityAsync(!marketIsFilterVisible));
  };
  return (
    <button
      type="button"
      onClick={toggleFilterOnClickHandler}
      className={styles.menu}
    >
      {!marketIsFilterVisible && <IconMenu className={styles.menu__icon} />}
      {marketIsFilterVisible && <IconClose className={styles.menu__icon} />}
    </button>
  );
}

export default Menu;
