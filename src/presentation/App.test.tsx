import { render, screen } from '@testing-library/react';

import App from 'presentation/App';

test('Render <App />', () => {
  render(<App />);
  const header = screen.getByTestId('Header');
  const layout = screen.getByTestId('Layout');
  const footer = screen.getByTestId('Footer');
  expect(header).toBeInTheDocument();
  expect(layout).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
