import {Action, Dispatch} from "redux";
import {authApi} from "../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "./reduxStore";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserDataMe} from "./AuthReducer";

export type AppStateUsersType = {
    initialized: boolean
}

const initialStateUsers: AppStateUsersType = {
    initialized: false
}

type ActionType =
    ReturnType<typeof initializedSuccess>


export const appReducer = (state: AppStateUsersType = initialStateUsers, action: ActionType): AppStateUsersType => {
    switch (action.type) {
        case "INITIALIZET_SUCCESS":
            return {...state, initialized:true}
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: "INITIALIZET_SUCCESS"
} as const)


export const initializeApp = (): ThunkAction<void, AppStoreType, unknown, ActionType> => (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
        let promise = dispatch(getAuthUserDataMe());
        Promise.all([promise])
            .then(()=>{
                dispatch(initializedSuccess())
            })
}


type ThunkType<A extends Action = Action> = ThunkAction<void, AppStoreType, unknown, ActionType | A>