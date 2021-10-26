import { Dispatch } from 'redux';

import { IReduxBasketActionTypes, IReduxBasketActions, IReduxBasketDispatch, IReduxBasketState, IReduxBasketItem, IReduxBasketItemUpdate } from 'application/redux/basket';

const rdxBasketActionTypes: IReduxBasketActionTypes = {
  BASKET_GRANDTOTAL_UPDATE: 'BASKET_GRANDTOTAL_UPDATE',
  BASKET_ITEM_ADD: 'BASKET_ITEM_ADD',
  BASKET_ITEM_INCRASE_QUANTITY: 'BASKET_ITEM_INCRASE_QUANTITY',
  BASKET_ITEM_DECREASE_QUANTITY: 'BASKET_ITEM_DECREASE_QUANTITY',
};

const rdxBasketSelector = (state: IReduxBasketState): IReduxBasketState => state.basketReducer;

// Basket: Update Grand Total: begin
const basketUpdateGrandTotal = (): IReduxBasketActions => ({
  type: rdxBasketActionTypes.BASKET_GRANDTOTAL_UPDATE,
});
// Basket: Update Grand Total: end


// Basket: Add Item: begin
const basketAddItem = (item: IReduxBasketItem): IReduxBasketActions => ({
  type: rdxBasketActionTypes.BASKET_ITEM_ADD,
  actionAddItem: item,
});

const rdxBasketAddItemAsync = (item: IReduxBasketItem): IReduxBasketDispatch => async (dispatch: Dispatch<IReduxBasketActions>) => {
  dispatch(basketAddItem(item));
  dispatch(basketUpdateGrandTotal());
};
// Basket: Add Item: end


// Basket: Incrase Item Quantity: begin
const basketIncraseItemQuantity = (data: IReduxBasketItemUpdate): IReduxBasketActions => ({
  type: rdxBasketActionTypes.BASKET_ITEM_INCRASE_QUANTITY,
  actionIncraseItemQuantity: data,
});

const rdxBasketIncraseItemQuantityAsync = (data: IReduxBasketItemUpdate): IReduxBasketDispatch => async (dispatch: Dispatch<IReduxBasketActions>) => {
  dispatch(basketIncraseItemQuantity(data));
  dispatch(basketUpdateGrandTotal());
};
// Basket: Incrase Item Quantity: end


// Basket: Decrease Item Quantity: begin
const basketDecreaseItemQuantity = (data: IReduxBasketItemUpdate): IReduxBasketActions => ({
  type: rdxBasketActionTypes.BASKET_ITEM_DECREASE_QUANTITY,
  actionDecreaseItemQuantity: data,
});

const rdxBasketDecreaseItemQuantityAsync = (data: IReduxBasketItemUpdate): IReduxBasketDispatch => async (dispatch: Dispatch<IReduxBasketActions>) => {
  dispatch(basketDecreaseItemQuantity(data));
  dispatch(basketUpdateGrandTotal());
};
// Basket: Decrease Item Quantity: end


export {
  rdxBasketActionTypes,
  rdxBasketSelector,
  rdxBasketAddItemAsync,
  rdxBasketIncraseItemQuantityAsync,
  rdxBasketDecreaseItemQuantityAsync,
};
