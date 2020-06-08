const url = process.env.REACT_APP_API

export const actions = {
    USER_REGISTER : {
        type : "USER_REGISTER",
        linkApi : `${url}/users/register`
    },
    USER_LOGIN : {
        type : "USER_LOGIN",
        linkApi : `${url}/users/login`
    },
    USER_COMEBACK : {
        type : "USER_COMEBACK",
        linkApi : `${url}/users/loginWithToken`
    },
    USER_LOGOUT : {
        type : "USER_LOGOUT",
        linkApi : `${url}/users/logout`
    },
    USER_LOGOUT_ALL : {
        type : "USER_LOGOUT_ALL",
        linkApi : `${url}/users/logoutAll`
    },
    USER_VIEW_PROFILE : {
        type : "USER_VIEW_PROFILE",
        linkApi : `${url}/users/profile`
    },
}