interface IHeader {
  testId: string;
}

function Header({ testId }: IHeader): JSX.Element {
  return (
    <header data-testid={testId} className="header">
      <div className="header__container">
        <h1>Header</h1>
      </div>
    </header>
  );
}

export default Header;
