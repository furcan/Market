import { render, screen } from '@testing-library/react';

import App from 'presentation/App';

test('Render <App />', () => {
  render(<App />);
  const appElement = screen.getByTestId('App');
  expect(appElement).toBeInTheDocument();
});
