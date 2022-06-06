import {Dispatch} from "redux";
import {authApi} from "../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "./reduxStore";

export type StateUsersType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialStateUsers: StateUsersType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

type ActionType =
    ReturnType<typeof setAuthUserData>


export const authReducer = (state: StateUsersType = initialStateUsers, action: ActionType): StateUsersType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth:boolean) => ({
    type: "SET_USER_DATA",
    payload: {id, email, login,isAuth}
} as const)

export const getAuthUserDataMe = (): ThunkAction<void, AppStoreType, unknown, ActionType> => (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    authApi.getMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login,true))
        }
    })
}
export const loginTC = (email:string, password:string, rememberMe:boolean): ThunkAction<void, AppStoreType, unknown, ActionType> => (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    authApi.login(email,password,rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataMe())
        }
    })
}
export const logoutTC = (): ThunkAction<void, AppStoreType, unknown, ActionType> => (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    authApi.logout()
        .then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login,false))
        }
    })
}
