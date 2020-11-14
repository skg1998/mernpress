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
        url: BASE_URL + "admin/login",
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
        'name': data.name,
        'email': data.email,
        'password':data.password,
    });

    const configs = {
        method: 'post',
        url: BASE_URL + "admin/signup",
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

export const AddBanner = (data) => {
    console.log("data",data)
    const configs = {
        method: 'post',
        url: BASE_URL + "banner/",
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
    console.log("data",data)
    const configs = {
        method: 'post',
        url: BASE_URL + "slidder/",
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

export const AddTitle = (data) => {
    
    const configs = {
        method: 'post',
        url: BASE_URL + "title/",
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
