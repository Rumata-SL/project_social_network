import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import {profileReducer} from "./ProfileReducer";
import {messageReducer} from "./MessageReducer";
import {sideBarReducer} from "./SideBarReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store;


// export type ReducersType = ReturnType<typeof reducers>
// export default store;