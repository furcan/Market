import { IReduxMarketState } from 'application/redux/market';

const rdxMarketInitialState: Omit<IReduxMarketState, 'marketReducer'> = {
  marketIsFilterVisible: false,
  marketIsBasketVisible: false,
};

export {
  rdxMarketInitialState,
};
