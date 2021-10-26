import { IReduxBasketActions, IReduxBasketState, rdxBasketInitialState, rdxBasketActionTypes, IReduxBasketItem } from 'application/redux/basket';

/* eslint-disable indent */
const basketReducer = (state = rdxBasketInitialState, action: IReduxBasketActions): IReduxBasketState => {
  switch (action.type) {
    // Update Grand Total: begin
    case rdxBasketActionTypes.BASKET_GRANDTOTAL_UPDATE:
      return {
        ...state,
        basketGrandTotal: state.basketItems.map((item: IReduxBasketItem) => item.price * item.quantity).reduce((memo: number, price: number) => memo + price, 0),
      };
    // Update Grand Total: end

    // Add Item To the Basket: begin
    case rdxBasketActionTypes.BASKET_ITEM_ADD:
      return {
        ...state,
        basketItems: action.actionAddItem ? [...state.basketItems, action.actionAddItem] : state.basketItems,
      };
    // Add Item To the Basket: end

    // Increase Item Quantity that in the Basket: begin
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
    // Increase Item Quantity that in the Basket: end

    // Decrease Item Quantity that in the Basket && Remove if Quantity is Zero: begin
    case rdxBasketActionTypes.BASKET_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        basketItems: state.basketItems.map((item: IReduxBasketItem) => {
          if (item.slug === action.actionDecreaseItemQuantity?.slug) {
            item.quantity = item.quantity - action.actionDecreaseItemQuantity.quantity;
          }
          return item;
        }).filter((item: IReduxBasketItem) => item.quantity > 0),
      };
    // Decrease Item Quantity that in the Basket && Remove if Quantity is Zero: end

    default:
      return state;
  }
};
/* eslint-enable indent */

export {
  basketReducer,
};
