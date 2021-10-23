import styles from 'presentation/components/layout/Layout.module.scss';

type TChildren = React.ReactNode
  | JSX.Element
  | JSX.Element[]
  | string
  | string[]
  | React.ReactChild
  | React.ReactChild[];

interface ILayout {
  testId: string;
  children?: TChildren;
}

function Layout({ testId, children }: ILayout): JSX.Element {
  return (
    <section data-testid={testId} className={styles.layout}>
      <div className={styles.layout__container}>
        {children}
      </div>
    </section>
  );
}

export default Layout;
