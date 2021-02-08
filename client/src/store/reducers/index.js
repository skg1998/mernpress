import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { cartReducer } from './cart.reducer';
import { toastReducer } from './toast.reducer';
import { headerReducer } from './header.reducer';
import { likedReducer } from './liked.reducer';
import { productDetailsReducer } from './productDetails.reducer';
import { productsReducer } from './products.reducer';


const Reducer = combineReducers({
  authentication,
  users,
  alert,
  cartReducer,
  toastReducer,
  headerReducer,
  likedReducer,
  productDetailsReducer,
  productsReducer
});

export default Reducer;