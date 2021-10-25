import { IReduxBasketActions, IReduxBasketState, rdxBasketInitialState, rdxBasketActionTypes, IReduxBasketItem } from 'application/redux/basket';

/* eslint-disable indent */
const basketReducer = (state = rdxBasketInitialState, action: IReduxBasketActions): IReduxBasketState => {
  switch (action.type) {
    case rdxBasketActionTypes.BASKET_GRANDTOTAL_UPDATE:
      return {
        ...state,
        basketGrandTotal: state.basketItems.map((item: IReduxBasketItem) => item.price * item.quantity).reduce((memo: number, price: number) => memo + price, 0),
      };

    case rdxBasketActionTypes.BASKET_ITEM_ADD:
      return {
        ...state,
        basketItems: action.actionAddItem ? [...state.basketItems, action.actionAddItem] : state.basketItems,
      };

    case rdxBasketActionTypes.BASKET_ITEM_INCRASE_QUANTITY:
      return {
        ...state,
        basketItems: state.basketItems.map((item: IReduxBasketItem) => {
          if (item.slug === action.actionIncraseItemQuantity?.slug) {
            item.quantity = item.quantity + action.actionIncraseItemQuantity.quantity;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  basketReducer,
};
