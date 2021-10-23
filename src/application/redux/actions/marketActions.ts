import { Dispatch, IReduxMarketActionTypes, IReduxMarketActions, IReduxMarketDispatch, IReduxMarketState } from 'application/redux';

const rdxMarketActionTypes: IReduxMarketActionTypes = {
  MARKET_FILTERS_VISIBILITY: 'MARKET_FILTERS_VISIBILITY',
  MARKET_BASKET_VISIBILITY: 'MARKET_BASKET_VISIBILITY',
};

const rdxMarketSelector = (state: IReduxMarketState): IReduxMarketState => state.marketReducer;

// Market Filters Visibility: begin
const marketFiltersVisibility = (visibility: boolean): IReduxMarketActions => ({
  type: rdxMarketActionTypes.MARKET_FILTERS_VISIBILITY,
  actionFiltersVisibility: visibility,
});

const rdxMarketFiltersVisibilityAsync = (visibility: boolean): IReduxMarketDispatch => async (dispatch: Dispatch<IReduxMarketActions>) => {
  dispatch(marketFiltersVisibility(visibility));
};
// Market Filters Visibility: end

// Market Basket Visibility: begin
const marketBasketVisibility = (visibility: boolean): IReduxMarketActions => ({
  type: rdxMarketActionTypes.MARKET_BASKET_VISIBILITY,
  actionBasketVisibility: visibility,
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
