import { useDispatch, useSelector } from 'react-redux';
import { FiMenu as IconMenu, FiX as IconClose } from 'react-icons/fi';

import { rdxMarketSelector, rdxMarketFiltersVisibilityAsync } from 'application/redux/market';

import styles from 'presentation/components/header-menu/HeaderMenu.module.scss';

function HeaderMenu(): JSX.Element {
  const dispatch = useDispatch();
  const { marketIsFilterVisible } = useSelector(rdxMarketSelector);

  const toggleFilterOnClickHandler = (): void => {
    dispatch(rdxMarketFiltersVisibilityAsync(!marketIsFilterVisible));
  };
  return (
    <button
      type="button"
      onClick={toggleFilterOnClickHandler}
      className={styles.headermenu}
    >
      {!marketIsFilterVisible && <IconMenu className={styles.headermenu__icon} />}
      {marketIsFilterVisible && <IconClose className={styles.headermenu__icon} />}
    </button>
  );
}

export default HeaderMenu;
