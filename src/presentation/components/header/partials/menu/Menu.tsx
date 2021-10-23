import { FiMenu as IconMenu } from 'react-icons/fi';

import styles from 'presentation/components/header/partials/menu/Menu.module.scss';

function Menu(): JSX.Element {
  return (
    <button
      type="button"
      onClick={() => console.log('TODO: open Filters on mobile')}
      className={styles.menu}
    >
      <IconMenu className={styles.menu__icon} />
    </button>
  );
}

export default Menu;
