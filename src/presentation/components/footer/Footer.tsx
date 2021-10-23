import { constants } from 'application/constants';

import styles from 'presentation/components/footer/Footer.module.scss';

interface IFooter {
  testId: string;
}

function Footer({ testId }: IFooter): JSX.Element {
  return (
    <footer data-testid={testId} className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__copyright}>&copy;{`${new Date().getFullYear()} ${constants.app.name}`}</p>
        <span className={styles.footer__seperator}>{`•`}</span>
        <a
          className={styles.footer__link}
          href={process.env.PUBLIC_URL}
        >
          <span>{constants.text.footer.privacy}</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
