import { Dispatch } from 'redux';

interface IReduxMarketDispatch {
  (dispatch: Dispatch<IReduxMarketActions>): Promise<void>;
}

interface IReduxMarketState {
  isFiltersVisible: boolean;
  isBasketVisible: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  marketReducer?: any;
}

interface IReduxMarketActionTypes {
  MARKET_FILTERS_VISIBILITY: string;
  MARKET_BASKET_VISIBILITY: string;
}

interface IReduxMarketActions {
  type: string;
  actionFiltersVisibility?: boolean,
  actionBasketVisibility?: boolean,
}


export type {
  Dispatch,
  IReduxMarketDispatch,
  IReduxMarketState,
  IReduxMarketActionTypes,
  IReduxMarketActions,
};
