import axios from 'axios';
import qs from 'query-string';

const BASE_URL = '/api/v1/';
let config = {
    headers: {
        Accept: "application/json",
    },
  }

export const AdminSignin = (data) => {
    var submitData = qs.stringify({
        'email': data.email,
        'password':data.password,
    });

    const configs = {
        method: 'post',
        url: BASE_URL + "users/",
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : submitData
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
        'username': data.username,
        'email': data.email,
        'password':data.password,
    });

    const configs = {
        method: 'post',
        url: BASE_URL + "users/",
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : submitData
      };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const AddBanner = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/" , config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const AddCategory = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/" , config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const AddProduct = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/" , config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const AddProjectTitle = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/" , config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const AddShop = () => {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "admin/" , config)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}


export const AddSlider = (data) => {
    console.log(data.files)
    var submitData = qs.stringify({
        "images": data.files
    });
    console.log("submitData",submitData)
    const configs = {
        method: 'post',
        url: BASE_URL + "slidder/",
        headers: { 
            Accept: "application/json",
        },
        data : submitData
      };

    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}

export const AddTitle = (data) => {
    
    const configs = {
        method: 'post',
        url: BASE_URL + "addtitle/",
        headers: { 
            Accept: "application/json",
        },
        data : data
      };

    return new Promise((resolve, reject) => {
        axios(configs)
            .then(({ status, data }) => {
                resolve(status == 200 && data ? data : null)
            })
            .catch(reject)
    })
}
