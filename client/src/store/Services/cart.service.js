import { authHeader } from '../helpers';
const server = process.env.REACT_APP_BACKEND_SERVER;
const BASE_URL = "/api/v1/";

function checkout() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    };

    return fetch(`${server}/${BASE_URL}auth/signin`, requestOptions)
        .then(res => {
            return res;
        });
}

export const cartService = { checkout };
