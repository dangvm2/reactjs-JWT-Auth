import { actions } from '../constants'

const initialState = {
    username: "",
    email: "",
    isLogged: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_REGISTER.type:
            localStorage.setItem("isLogged", "true")
            return {
                ...state,
                username: action.result.user.name,
                email: action.result.user.email,
                isLogged: true
            }
        case actions.USER_LOGIN.type:
            localStorage.setItem("isLogged", "true")
            return {
                ...state,
                username: action.result.user.name,
                email: action.result.user.email,
                isLogged: true
            }
        case actions.USER_COMEBACK.type:
            localStorage.setItem("isLogged", "true")
            return {
                ...state,
                username: action.result.name,
                email: action.result.email,
                isLogged: true
            }
        case actions.USER_LOGOUT.type:
            localStorage.setItem("isLogged", "false")
            return {
                ...state,
                username: "",
                email: "",
                isLogged: false
            }
        case actions.USER_LOGOUT_ALL.type:
            localStorage.setItem("isLogged", "false")
            return {
                ...state,
                username: "",
                email: "",
                isLogged: false
            }
        case actions.USER_VIEW_PROFILE.type:
            return {
                ...state,
                username: action.result.user.name,
                email: action.result.user.email,
            }
        default:
            return state
    }
}