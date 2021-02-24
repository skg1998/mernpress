import { adminConstants } from '../constant';

export function users(action = {}, state = {}) {
    switch (action.type) {
        case adminConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case adminConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case adminConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}