import { createStore, applyMiddleware, Store } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { constants } from 'application/constants';
import { reduxAppReducers } from 'application/redux/reducers';
import { IReduxPersistingState, reduxPersistingGetState, reduxPersistingSetState } from 'application/redux/persisting';


const reduxStore: Store = createStore(
  reduxAppReducers,
  reduxPersistingGetState(),
  composeWithDevTools(applyMiddleware(thunk)),
);

let takeItEasy: number;
reduxStore.subscribe(() => {
  window.clearTimeout(takeItEasy);
  takeItEasy = window.setTimeout(() => {
    const reduxState = reduxStore.getState() as IReduxPersistingState;
    reduxPersistingSetState(reduxState);
    window.clearTimeout(takeItEasy);
  }, constants.redux.persistingDelay);
});

export {
  ReduxProvider,
  reduxStore,
};
