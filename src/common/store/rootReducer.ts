import { combineReducers } from 'redux';

import CartReducer from './ducks/cart';

export default combineReducers({
  cart: CartReducer,
});
