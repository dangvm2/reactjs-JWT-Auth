import axios from 'axios'
import { actions } from '../constants';

export function UserRegister(history, userName, password, email) {
    return (dispatch) => {
        axios.post(`${actions.USER_REGISTER.linkApi}`, {
            "name": userName,
            "password": password,
            "email": email
        }, {
            withCredentials: true
        }).then((res) => {
            let result = res.data
            dispatch({ type: actions.USER_REGISTER.type, result })
            history.push("/home")
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
}
export function UserLogin(password, email) {
    return (dispatch) => {
        axios.post(`${actions.USER_LOGIN.linkApi}`, {
            "password": password,
            "email": email
        }, {
            withCredentials: true
        }).then((res) => {
            let result = res.data
            dispatch({ type: actions.USER_LOGIN.type, result })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
}
export function UserComeBack() {
    return (dispatch) => {
        axios.post(`${actions.USER_COMEBACK.linkApi}`, {}, {
            withCredentials: true
        }).then((res) => {
            let result = res.data
            dispatch({ type: actions.USER_COMEBACK.type, result })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
}
export function UserLogout() {
    return (dispatch) => {
        axios.post(`${actions.USER_LOGOUT.linkApi}`, {}, {
            withCredentials: true
        }).then((res) => {
            let result = res.data
            dispatch({ type: actions.USER_LOGOUT.type, result })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
}
export function UserLogoutAll() {
    return (dispatch) => {
        axios.post(`${actions.USER_LOGOUT_ALL.linkApi}`, {}, {
            withCredentials: true
        }).then((res) => {
            let result = res.data
            dispatch({ type: actions.USER_LOGOUT_ALL.type, result })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
}
export function UserViewProfile() {
    return (dispatch) => {
        axios.get(`${actions.USER_VIEW_PROFILE.linkApi}`, {
            withCredentials: true
        }).then((res) => {
            let result = res.data
            dispatch({ type: actions.USER_VIEW_PROFILE.type, result })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
    }
}