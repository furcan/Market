import { Dispatch } from 'redux';

interface IReduxMarketState {
  marketIsFilterVisible: boolean;
  marketIsBasketVisible: boolean;
  marketReducer: IReduxMarketState;
}

interface IReduxMarketActionTypes {
  MARKET_VISIBILITY_FILTERS: string;
  MARKET_VISIBILITY_BASKET: string;
}

interface IReduxMarketActions {
  type: string;
  actionVisibilityFilters?: boolean;
  actionVisibilityBasket?: boolean;
}

interface IReduxMarketDispatch {
  (dispatch: Dispatch<IReduxMarketActions>): Promise<void>;
}

export type {
  IReduxMarketDispatch,
  IReduxMarketState,
  IReduxMarketActionTypes,
  IReduxMarketActions,
};
