import {Action, Dispatch} from "redux";
import {authApi, securityApi} from "../../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType, ThunkType} from "./reduxStore";
import {FormAction, stopSubmit} from "redux-form";

export type StateUsersType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string
}

const initialStateUsers: StateUsersType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: ""
}

export type AuthActionType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlAC>


export const authReducer = (state: StateUsersType = initialStateUsers, action: AuthActionType): StateUsersType => {
    switch (action.type) {
        case "SET_USER_DATA":
        case "GET_CAPTCHA_UTL":
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: "SET_USER_DATA",
    payload: {id, email, login, isAuth}
} as const);

export const getCaptchaUrlAC = (captchaUrl: string) => ({
    type: "GET_CAPTCHA_UTL",
    payload: {captchaUrl}
} as const);


export const getAuthUserDataMe = (): ThunkType => async (dispatch) => {
    let response = await authApi.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captcha = response.data.url;
    dispatch(getCaptchaUrlAC(captcha))

}

export const logoutTC = (): ThunkType => async (dispatch) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, false))
    }
}
