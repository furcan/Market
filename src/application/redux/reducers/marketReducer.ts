import { IReduxMarketActions, IReduxMarketState, rdxMarketInitialState, rdxMarketActionTypes } from 'application/redux';

/* eslint-disable indent */
const marketReducer = (state = rdxMarketInitialState, action: IReduxMarketActions): IReduxMarketState => {
  switch (action.type) {
    case rdxMarketActionTypes.MARKET_FILTERS_VISIBILITY:
      return {
        ...state,
        isFiltersVisible: action.actionFiltersVisibility === true,
      };

    case rdxMarketActionTypes.MARKET_BASKET_VISIBILITY:
      return {
        ...state,
        isBasketVisible: action.actionBasketVisibility === true,
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  marketReducer,
};
