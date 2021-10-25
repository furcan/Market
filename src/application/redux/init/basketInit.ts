import { IReduxBasketState } from 'application/redux/basket';

const rdxBasketInitialState: IReduxBasketState = {
  basketGrandTotal: 0,
  basketItems: [],
};

export {
  rdxBasketInitialState,
};
