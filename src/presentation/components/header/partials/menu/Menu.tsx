import { useDispatch, useSelector } from 'react-redux';
import { FiMenu as IconMenu, FiX as IconClose } from 'react-icons/fi';

import { rdxMarketSelector, rdxMarketFiltersVisibilityAsync } from 'application/redux';

import styles from 'presentation/components/header/partials/menu/Menu.module.scss';

function Menu(): JSX.Element {
  const dispatch = useDispatch();
  const { isFiltersVisible } = useSelector(rdxMarketSelector);

  const toggleFilterOnClickHandler = (): void => {
    dispatch(rdxMarketFiltersVisibilityAsync(!isFiltersVisible));
  };
  return (
    <button
      type="button"
      onClick={toggleFilterOnClickHandler}
      className={styles.menu}
    >
      {!isFiltersVisible && <IconMenu className={styles.menu__icon} />}
      {isFiltersVisible && <IconClose className={styles.menu__icon} />}
    </button>
  );
}

export default Menu;
