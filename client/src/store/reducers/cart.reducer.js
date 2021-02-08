import {Types} from '../constant'

const initialState = {
  cartProducts: [],
};

export function cartReducer(action={}, state = initialState) {
  switch (action.type) {
    case Types.ADD_PRODUCT_TO_CART:
    case Types.REMOVE_PRODUCT_FROM_CART:
    case Types.REMOVE_PRODUCTS_FROM_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };

    default:
      return state;
  }
}
