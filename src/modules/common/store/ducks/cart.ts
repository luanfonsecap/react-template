/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { Reducer } from 'redux';

// Action Types
export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  failedStockCheck: number[];
}

export enum ActionTypes {
  ADD_PRODUCT_TO_CART_REQUEST = 'cart/reducer/ADD_PRODUCT_TO_CART_REQUEST',
  ADD_PRODUCT_TO_CART_SUCCESS = 'cart/reducer/ADD_PRODUCT_TO_CART_SUCCESS',
  ADD_PRODUCT_TO_CART_FAILURE = 'cart/reducer/ADD_PRODUCT_TO_CART_FAILURE',
}

// Reducer
const INITIAL_STATE: CartState = {
  items: [],
  failedStockCheck: [],
};

const CartReducer: Reducer<CartState> = (_state = INITIAL_STATE, action) => {
  return produce((_base: CartState, draft: Draft<CartState>) => {
    switch (action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;

          return draft.items[productInCartIndex];
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
export function addProductToCartRequest(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: Product) {
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
