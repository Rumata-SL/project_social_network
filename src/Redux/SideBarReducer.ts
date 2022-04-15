import {ActionType, SideBarType} from "./Store";
import {v1} from "uuid";

let initialState = {
    news: [
        {id: v1(), title: "1"},
        {id: v1(), title: "2"},
        {id: v1(), title: "3"},
    ],
}

export const sideBarReducer = (state: SideBarType = initialState, action: ActionType): SideBarType => {
    return state
}