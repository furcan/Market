import React from 'react';
import { hydrate, render } from 'react-dom';

import { ReduxProvider, reduxStore } from 'application/redux/store';

import App from 'presentation/App';

import 'presentation/styles/styles.global.scss';

const MarketApp = (): JSX.Element => {
  return (
    <ReduxProvider store={reduxStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReduxProvider>
  );
};

const marketAppRootElement: HTMLElement | null = window.document.getElementById('MarketApp');
if (marketAppRootElement?.hasChildNodes()) {
  hydrate(<MarketApp />, marketAppRootElement);
} else if (marketAppRootElement) {
  render(<MarketApp />, marketAppRootElement);
}
