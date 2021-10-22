function App(): JSX.Element {

  const testOnClickAsync = async (): Promise<void> => {
    try {
      const request = await fetch('https://furcan.herokuapp.com/api/posts?_page=1&_limit=2', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('request: ', request);

      const totalCount = request.headers.get('X-Total-Count');
      console.log('totalCount: ', totalCount);

      const response = await request.json();
      console.log('response: ', response);

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
