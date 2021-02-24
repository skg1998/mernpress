import { adminConstants } from '../constant';
import { adminService } from '../Services';
import { alertActions } from './';
import { history } from '../helpers';

export const adminActions = {
    login,
    logout,
    getAll
};

function signup(username, email, password) {
    return dispatch => {
        dispatch(request({ email }));
        adminService.signup(username, email, password)
            .then(admin => {
                console.log("admin", admin)
                dispatch(success(admin));
            },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                })
    }
    function request(admin) { return { type: adminConstants.SIGNUP_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.SIGNUP_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.SIGNUP_FAILURE, error } }
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        adminService.login(username, password)
            .then(
                admin => {
                    console.log("admin", admin)
                    dispatch(success(admin));
                    setTimeout(() => {
                        history.push('/admin');
                    });
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(admin) { return { type: adminConstants.LOGIN_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.LOGIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.LOGIN_FAILURE, error } }
}

function logout() {
    adminService.logout();
    return { type: adminConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        adminService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: adminConstants.GETALL_REQUEST } }
    function success(users) { return { type: adminConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: adminConstants.GETALL_FAILURE, error } }
}