import React from 'react';
import { hydrate, render } from 'react-dom';

import App from 'presentation/App';

import 'presentation/styles/styles.global.scss';

const MarketApp = (): JSX.Element => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const marketAppRootElement: HTMLElement | null = window.document.getElementById('MarketApp');
if (marketAppRootElement?.hasChildNodes()) {
  hydrate(<MarketApp />, marketAppRootElement);
} else if (marketAppRootElement) {
  render(<MarketApp />, marketAppRootElement);
}
