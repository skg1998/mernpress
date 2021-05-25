import axios from 'axios';
import qs from 'query-string';

const BASE_URL = 'http://localhost:5000/api/v1/';

let config = {
    headers: {
        Accept: "application/json",
    },
}

// -----------------------ADMIN API ---------------------

export const AdminSignin = (data) => {
    var submitData = qs.stringify({
        'email': data.email,
        'password': data.password,
    });

    const configs = {
        method: 'post',
        url: BASE_URL + "admin/login",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: submitData
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

export const Adminsignup = (data) => {

    var submitData = qs.stringify({
        'name': data.name,
        'email': data.email,
        'password': data.password,
    });

    const configs = {
        method: 'post',
        url: BASE_URL + "admin/signup",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: submitData
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

// -----------------------------BANNER API -------------------------

export const AddBanner = (data) => {
    console.log("data", data)
    const configs = {
        method: 'post',
        url: BASE_URL + "banner/",
        headers: {
            Accept: "application/json",
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

//------------------------------PROJECT TITLE API ------------------------------
export const AddProjectTitle = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/", config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}


//--------------------------SHOP API ---------------------------------------------

export const AddShop = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/", config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

//-------------------------------------------SLIDDER API ---------------------------

export const AddSlider = (data) => {
    console.log("data", data)
    const configs = {
        method: 'post',
        url: BASE_URL + "slidder/",
        headers: {
            Accept: "application/json",
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

//------------------------------PROJECT TITLE API ------------------------------

export const AddTitle = (data) => {

    const configs = {
        method: 'post',
        url: BASE_URL + "title/",
        headers: {
            Accept: "application/json",
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

//-----------------------Category Api------------------

export const AddCategory = (data) => {
    console.log("data", data)
    const configs = {
        method: 'post',
        url: BASE_URL + "category/",
        headers: {
            Accept: "application/json",
        },
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const Category = () => {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + "category/", config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const DeleteCategoryBy = (id) => {
    console.log("id", id)
    const configs = {
        method: 'delete',
        url: BASE_URL + "category/",
        headers: {
            Accept: "application/json",
        },
        data: id
    };
    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}


//-----------------------Product Api------------------

export const AddProduct = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/", config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}
