import {Types} from '../constant'

const initialState = {
  show: false,
  title: '',
  text: '',
};

export function toastReducer(action={ }, state = initialState){
  switch (action.type) {
    case Types.SHOW_TOAST:
      return {
        ...state,
        show: true,
        title: action.payload.title,
        text: action.payload.text,
      };
    case Types.HIDE_TOAST:
      return {
        ...state,
        show: false,
        title: '',
        text: '',
      };
    default:
      return state;
  }
}
