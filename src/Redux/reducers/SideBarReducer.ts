import {v1} from "uuid";

type NewsType = {
    id: string
    title: string
}
type SideBarType = {
    news: Array<NewsType>
}
type ActionType = ReturnType<typeof AddNewsAC>

let initialState = {
    news: [
        {id: v1(), title: "1"},
        {id: v1(), title: "2"},
        {id: v1(), title: "3"},
    ],
}

export const sideBarReducer = (state: SideBarType = initialState, action: ActionType): SideBarType => {
    switch (action.type) {
        case "SideBar/ADD_NEWS":
            return {...state}
    }
    return state
}
export const AddNewsAC = () => ({type: "SideBar/ADD_NEWS"} as const)