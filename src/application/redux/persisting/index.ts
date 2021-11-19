import { constants } from 'application/constants';
import { devLoggerInfo } from 'application/helpers';
import { IReduxMarketState } from 'application/redux/market';
import { IReduxBasketState } from 'application/redux/basket';
import { IReduxProductsState } from 'application/redux/products';


interface IReduxPersistingState {
  marketReducer: IReduxMarketState;
  productsReducer: IReduxProductsState;
  basketReducer: IReduxBasketState;
}

const reduxPersistingSetState = (state: IReduxPersistingState): void => {
  try {
    const stateAsString = JSON.stringify(state);
    window.localStorage.setItem(constants.redux.persistingLocalStorageKey, stateAsString);
  } catch {
    devLoggerInfo('"localStorage" is not available.');
  }
};

const reduxPersistingGetState = (): IReduxPersistingState | undefined => {
  try {
    const stateFromLocalStorage: string | null = window.localStorage.getItem(constants.redux.persistingLocalStorageKey);
    if (!stateFromLocalStorage) {
      throw new Error();
    }
    return JSON.parse(stateFromLocalStorage) as IReduxPersistingState;
  } catch {
    return undefined;
  }
};

export type {
  IReduxPersistingState,
};

export {
  reduxPersistingSetState,
  reduxPersistingGetState,
};
