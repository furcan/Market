import Logo from 'presentation/components/logo/Logo';

import Basket from 'presentation/components/header/partials/basket/Basket';

import styles from 'presentation/components/header/Header.module.scss';

interface IHeader {
  testId: string;
}

function Header({ testId }: IHeader): JSX.Element {
  return (
    <header data-testid={testId} className={styles.header}>
      <div className={styles.header__container}>
        <a
          className={styles.header__logo}
          href={process.env.PUBLIC_URL}
        >
          <Logo className={styles.header__logo__icon} />
        </a>
        <div className={styles.header__basket}>
          <Basket />
        </div>
      </div>
    </header>
  );
}

export default Header;
