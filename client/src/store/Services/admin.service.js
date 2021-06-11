import { authHeader } from '../helpers';
const BASE_URL = "http://localhost:5000/";
export const adminService = {
    signup,
    login,
    logout,
    getAll
};

function signup(username, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    };

    return fetch(`${BASE_URL}api/v1/auth/signup`, requestOptions)
        .then(handleResponse)
        .then(admin => {
            // login successful if there's a jwt token in the response
            if (admin.token) {
                // store admin details and jwt token in local storage to keep admin logged in between page refreshes
                localStorage.setItem('admin', JSON.stringify(admin));
            }

            return admin;
        });
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${BASE_URL}api/v1/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(admin => {
            // login successful if there's a jwt token in the response
            if (admin.token) {
                // store admin details and jwt token in local storage to keep admin logged in between page refreshes
                localStorage.setItem('admin', JSON.stringify(admin));
            }

            return admin;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('admin');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}api/v1/admin/getall`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
