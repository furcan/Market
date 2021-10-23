function App(): JSX.Element {

  const testOnClickAsync = async (): Promise<void> => {
    try {
      const response = await fetch('https://furcan.herokuapp.com/api/products?_page=1&_limit=16', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('response: ', response);

      const totalCount = response.headers.get('X-Total-Count');
      console.log('totalCount: ', totalCount);

      const data = await response.json();
      console.log('data: ', data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-testid="App">
      <h1>Market</h1>
      <button
        type="button"
        onClick={testOnClickAsync}
      >
        <span>TEST GET</span>
      </button>
    </div>
  );
}

export default App;
