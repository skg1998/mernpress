import {Types} from '../constant'

const initialState = {
  isLoading: false,
  error: null,
  products: [],
  hasMoreItems: true,
};

export function productsReducer(action={}, state = initialState){
  switch (action.type) {
    case Types.LOAD_PRODUCTS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasMoreItems: false,
        error: action.payload,
      };
    case Types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasMoreItems:false,
        error: null,
        products: action.payload,
      };
    case Types.LOAD_MORE_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasMoreItems: false,
        error: action.payload,
      };
    case Types.LOAD_MORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasMoreItems:false,
        error: null,
        products: [...state.products, ...action.payload],
      };
    default:
      return state;
  }
}
