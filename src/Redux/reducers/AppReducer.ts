import {Action} from "redux";
import {authApi} from "../../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType, ThunkType} from "./reduxStore";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserDataMe} from "./AuthReducer";

export type AppStateUsersType = {
    initialized: boolean
}

const initialStateUsers: AppStateUsersType = {
    initialized: false
}

export type AppActionType = ReturnType<typeof initializedSuccess>

export const appReducer = (state: AppStateUsersType = initialStateUsers, action: AppActionType): AppStateUsersType => {
    switch (action.type) {
        case "APP/INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: "APP/INITIALIZED_SUCCESS"
} as const)


export const initializeApp = ():ThunkType => async (dispatch) => {
    // let promise =
       await dispatch(getAuthUserDataMe());
            dispatch(initializedSuccess())

    // Promise.all([promise])
    //     .then(() => {
    //         dispatch(initializedSuccess())
    //     })
}

// type ThunkType<A extends Action = Action> = ThunkAction<void, AppStoreType, unknown, AppActionType | A>