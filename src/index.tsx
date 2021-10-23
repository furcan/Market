import React from 'react';
import { hydrate, render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducers } from 'application/redux/reducers';

import App from 'presentation/App';

import 'presentation/styles/styles.global.scss';

const MarketApp = (): JSX.Element => {
  const store = createStore(appReducers, composeWithDevTools(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

const marketAppRootElement: HTMLElement | null = window.document.getElementById('MarketApp');
if (marketAppRootElement?.hasChildNodes()) {
  hydrate(<MarketApp />, marketAppRootElement);
} else if (marketAppRootElement) {
  render(<MarketApp />, marketAppRootElement);
}
