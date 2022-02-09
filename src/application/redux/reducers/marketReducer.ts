import { IReduxMarketActions, IReduxMarketState, rdxMarketInitialState, rdxMarketActionTypes } from 'application/redux/market';

/* eslint-disable indent */
const marketReducer = (state = rdxMarketInitialState, action: IReduxMarketActions): Omit<IReduxMarketState, 'marketReducer'> => {
  switch (action.type) {
    case rdxMarketActionTypes.MARKET_VISIBILITY_FILTERS:
      return {
        ...state,
        marketIsFilterVisible: action.actionVisibilityFilters === true,
      };

    case rdxMarketActionTypes.MARKET_VISIBILITY_BASKET:
      return {
        ...state,
        marketIsBasketVisible: action.actionVisibilityBasket === true,
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  marketReducer,
};
