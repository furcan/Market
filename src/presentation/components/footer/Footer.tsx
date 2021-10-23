interface IFooter {
  testId: string;
}

function Footer({ testId }: IFooter): JSX.Element {
  return (
    <footer data-testid={testId} className="footer">
      <div className="footer__container">
        <h1>Footer</h1>
      </div>
    </footer>
  );
}

export default Footer;
