import {v1} from "uuid";

export type UsersType = {
    id: string,
    name: string,
}
export type MessagesType = {
    id: string,
    message: string,
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
    newMessageText: string
}
type ActionType =
    ReturnType<typeof NewMessageTextAC>
    | ReturnType<typeof SendMessageAC>

let initialState = {
    messages: [
        {id: v1(), message: "Hello, i am Satoshi"},
        {id: v1(), message: "Hello, i am Djun"},
        {id: v1(), message: "Hello, i am Acira"},
        {id: v1(), message: "Hello, i am Kero"},
        {id: v1(), message: "Hello, i am Ymy"},
    ],
    users: [
        {id: v1(), name: "Satoshi"},
        {id: v1(), name: "Djun"},
        {id: v1(), name: "Acira"},
        {id: v1(), name: "Kero"},
        {id: v1(), name: "Ymy"},
    ],
    newMessageText: "",
}


export const messageReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case "NEW_MESSAGE_TEXT":
            return {...state, newMessageText: action.body};
        case "SEND-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.newMessageText}],
                newMessageText: ""
            };
        default:
            return {...state};
    }
}

export const NewMessageTextAC = (message: string) => ({type: "NEW_MESSAGE_TEXT", body: message} as const)
export const SendMessageAC = () => ({type: "SEND-MESSAGE"} as const)
