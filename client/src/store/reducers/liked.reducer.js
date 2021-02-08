import {Types} from '../constant'

const initialState = {
  likedProducts: [],
};

export function likedReducer(action={}, state = initialState){
  switch (action.type) {
    case Types.LIKE_PRODUCT:
      return {
        ...state,
        likedProducts: [action.payload, ...state.likedProducts],
      };
    case Types.UNLIKE_PRODUCT:
      return {
        ...state,
        likedProducts: state.likedProducts.filter(p => p.id !== action.payload.id),
      };

    default:
      return state;
  }
}
