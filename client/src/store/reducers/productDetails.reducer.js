import {Types} from '../constant'

const initialState = {
  isLoading: false,
  error: null,
  product: null,
};

export function productDetailsReducer(action={}, state = initialState){
  switch (action.type) {
    case Types.LOAD_PRODUCT_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOAD_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case Types.LOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        product: action.payload,
      };

    default:
      return state;
  }
}