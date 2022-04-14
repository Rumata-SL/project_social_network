import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {messageReducer} from "./MessageReducer";
import {sideBarReducer} from "./SideBarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer
})

export type ReducersType = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;