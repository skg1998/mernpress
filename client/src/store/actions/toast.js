import {Types} from '../constant';

export const showToast = data => ({
  type: Types.SHOW_TOAST,
  payload: data,
});

export const hideToast = () => ({
  type: Types.HIDE_TOAST,
});
