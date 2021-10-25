import { Dispatch } from 'redux';

import { IReduxMarketActionTypes, IReduxMarketActions, IReduxMarketDispatch, IReduxMarketState } from 'application/redux/market';

const rdxMarketActionTypes: IReduxMarketActionTypes = {
  MARKET_VISIBILITY_FILTERS: 'MARKET_VISIBILITY_FILTERS',
  MARKET_VISIBILITY_BASKET: 'MARKET_VISIBILITY_BASKET',
};

const rdxMarketSelector = (state: IReduxMarketState): IReduxMarketState => state.marketReducer;

// Market Filters Visibility: begin
const marketFiltersVisibility = (visibility: boolean): IReduxMarketActions => ({
  type: rdxMarketActionTypes.MARKET_VISIBILITY_FILTERS,
  actionVisibilityFilters: visibility,
});

const rdxMarketFiltersVisibilityAsync = (visibility: boolean): IReduxMarketDispatch => async (dispatch: Dispatch<IReduxMarketActions>) => {
  dispatch(marketFiltersVisibility(visibility));
};
// Market Filters Visibility: end

// Market Basket Visibility: begin
const marketBasketVisibility = (visibility: boolean): IReduxMarketActions => ({
  type: rdxMarketActionTypes.MARKET_VISIBILITY_BASKET,
  actionVisibilityBasket: visibility,
});

const rdxMarketBasketVisibilityAsync = (visibility: boolean): IReduxMarketDispatch => async (dispatch: Dispatch<IReduxMarketActions>) => {
  dispatch(marketBasketVisibility(visibility));
};
// Market Basket Visibility: end


export {
  rdxMarketActionTypes,
  rdxMarketSelector,
  rdxMarketFiltersVisibilityAsync,
  rdxMarketBasketVisibilityAsync,
};
