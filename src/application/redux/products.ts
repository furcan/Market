export type {
  IReduxProductsDispatch,
  IReduxProductsState,
  IReduxProductsActionTypes,
  IReduxProductsActions,
} from 'application/redux/interfaces/productsInterface';

export {
  rdxProductsInitialState,
} from 'application/redux/init/productsInit';

export {
  rdxProductsActionTypes,
  rdxProductsSelector,
  rdxProductsTypesGetDataAsync,
  rdxProductsFilterSetTypeAsync,
  rdcProductsItemsGetDataAsync,
} from 'application/redux/actions/productsActions';
