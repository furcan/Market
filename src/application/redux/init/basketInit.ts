import { IReduxBasketState } from 'application/redux/basket';

const rdxBasketInitialState: Omit<IReduxBasketState, 'basketReducer'> = {
  basketGrandTotal: 0,
  basketItems: [],
};

export {
  rdxBasketInitialState,
};
