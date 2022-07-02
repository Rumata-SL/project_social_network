import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import {ProfileActionType, profileReducer} from "./ProfileReducer";
import {messageReducer, MessagesActionType} from "./MessageReducer";
import {SideBarActionType, sideBarReducer} from "./SideBarReducer";
import {UserActionType, usersReducer} from "./UsersReducer";
import {AuthActionType, authReducer} from "./AuthReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {AppActionType, appReducer} from "./AppReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type AppStoreType = ReturnType<typeof reducers>
// export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppRootActionsType>

export type AppRootActionsType =
    AppActionType
    | AuthActionType
    | MessagesActionType
    | ProfileActionType
    | SideBarActionType
    | UserActionType


// @ts-ignore
window.store = store;


// export type ReducersType = ReturnType<typeof reducers>
// export default store;