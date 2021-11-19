import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reduxAppReducers } from 'application/redux/reducers';

import App from 'presentation/App';

test('Render <App />', () => {
  const store = createStore(reduxAppReducers, applyMiddleware(thunk));
  render(<Provider store={store}><App /></Provider>);

  const header = screen.getByTestId('Header');
  const layout = screen.getByTestId('Layout');
  const footer = screen.getByTestId('Footer');
  expect(header).toBeInTheDocument();
  expect(layout).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
