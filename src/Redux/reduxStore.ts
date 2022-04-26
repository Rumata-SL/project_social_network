import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {messageReducer} from "./MessageReducer";
import {sideBarReducer} from "./SideBarReducer";
import {usersReducer} from "./UsersReducer";

const reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers);

// export type ReducersType = ReturnType<typeof reducers>
// export default store;