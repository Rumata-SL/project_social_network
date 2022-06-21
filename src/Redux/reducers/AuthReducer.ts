import {Action, Dispatch} from "redux";
import {authApi} from "../../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "./reduxStore";
import {FormAction, stopSubmit} from "redux-form";

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
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: "SET_USER_DATA",
    payload: {id, email, login, isAuth}
} as const)


export const getAuthUserDataMe = (): ThunkAction<void, AppStoreType, unknown, ActionType> => async (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    let response = await authApi.getMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType<FormAction> => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataMe())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]
                    :"Some error"
                dispatch(stopSubmit('login',{_error: message}))
            }
}

export const logoutTC = (): ThunkAction<void, AppStoreType, unknown, ActionType> => async(dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    const response = await authApi.logout()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, false))
            }
}

type ThunkType<A extends Action = Action> = ThunkAction<void, AppStoreType, unknown, ActionType | A>