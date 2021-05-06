import axios from 'axios';

import {
    USER_DATA,
} from '../types';

const baseURL = process.env.REACT_APP_API_URL;

// API REQUESTS

export const createUser = (formData) => {
    delete formData.agree;
    return axios.post(
        baseURL+`api/v1/users/register`,
        formData
    )
    .then(response => {
        formData.agree = true;
        return response.data;
    })
    .catch(error => {
        formData.agree = true;
        return {
            success: false,
            message: "SERVER ERROR!"
        }
    })
}

export const verifyCreds = (formData) => {
    return axios.post(
        baseURL+`api/v1/users/login`,
        formData
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return {
            success: false,
            message: "SERVER ERROR!"
        }
    })
}

export const authUser = (formData) => {
    return axios.get(
        baseURL+`api/v1/users/auth`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return {
            success: false,
            message: "SERVER ERROR!"
        }
    })
}

export const getUserData = () => {
    return axios.get(
        baseURL+`api/v1/users/me`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return {
            success: false,
            message: "SERVER ERROR!"
        }
    })
}

export const logout = () => {
    return axios.get(
        baseURL+`api/v1/users/logout`,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return {
            success: false,
            message: "SERVER ERROR!"
        }
    })
}

// DISPATCH FUNCTIONS

export const dispatchUserData = (data) => {
    return {
        type:    USER_DATA,
        payload: data
    }
}