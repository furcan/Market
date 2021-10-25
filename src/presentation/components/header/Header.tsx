import Logo from 'presentation/components/logo/Logo';

import HeaderMenu from 'presentation/components/header-menu/HeaderMenu';
import HeaderBasket from 'presentation/components/header-basket/HeaderBasket';

import styles from 'presentation/components/header/Header.module.scss';

interface IHeader {
  testId: string;
}

function Header({ testId }: IHeader): JSX.Element {
  return (
    <header data-testid={testId} className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__menu}>
          <HeaderMenu />
        </div>
        <a
          className={styles.header__logo}
          href={process.env.PUBLIC_URL}
        >
          <Logo className={styles.header__logo__icon} />
        </a>
        <div className={styles.header__basket}>
          <HeaderBasket />
        </div>
      </div>
    </header>
  );
}

export default Header;
