/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce, { Draft } from 'immer';

// Action Types
export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}

export enum ActionTypes {
  ADD_PRODUCT_TO_CART_REQUEST = 'cart/reducer/ADD_PRODUCT_TO_CART_REQUEST',
  ADD_PRODUCT_TO_CART_SUCCESS = 'cart/reducer/ADD_PRODUCT_TO_CART_SUCCESS',
  ADD_PRODUCT_TO_CART_FAILURE = 'cart/reducer/ADD_PRODUCT_TO_CART_FAILURE',
}

// Reducer
const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const CartReducer: Reducer<ICartState> = (_state = INITIAL_STATE, action) => {
  return produce((_base: ICartState, draft: Draft<ICartState>) => {
    switch (action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          return draft.items[productInCartIndex].quantity++;
        }

        return draft.items.push({ product, quantity: 1 });
      }

      case ActionTypes.ADD_PRODUCT_TO_CART_FAILURE: {
        return draft.failedStockCheck.push(action.payload.productId);
      }

      default: {
        return draft;
      }
    }
  });
};

// Action Creators
export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_FAILURE,
    payload: {
      productId,
    },
  };
}

export default CartReducer;
