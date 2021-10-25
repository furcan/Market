import { Dispatch } from 'redux';

interface IReduxBasketItemUpdate {
  slug: string;
  quantity: number;
}

interface IReduxBasketItem extends IReduxBasketItemUpdate {
  name: string;
  price: number;
}

interface IReduxBasketState {
  basketGrandTotal: number;
  basketItems: IReduxBasketItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  basketReducer?: any;
}

interface IReduxBasketActionTypes {
  BASKET_GRANDTOTAL_UPDATE: string;
  BASKET_ITEM_ADD: string;
  BASKET_ITEM_INCRASE_QUANTITY: string;
}

interface IReduxBasketActions {
  type: string;
  actionGrandTotal?: number;
  actionAddItem?: IReduxBasketItem;
  actionIncraseItemQuantity?: IReduxBasketItemUpdate;
}

interface IReduxBasketDispatch {
  (dispatch: Dispatch<IReduxBasketActions>): Promise<void>;
}

export type {
  IReduxBasketDispatch,
  IReduxBasketItem,
  IReduxBasketItemUpdate,
  IReduxBasketState,
  IReduxBasketActionTypes,
  IReduxBasketActions,
};
