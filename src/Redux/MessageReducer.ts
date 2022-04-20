import {ActionType, MessagesPageType} from "./Store";
import {v1} from "uuid";

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
            state.newMessageText = action.body
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageText
            state.newMessageText = ""
            state.messages.push({id: v1(), message: body})
            return state;
        default:
            return {...state};
    }
}

export const NewMessageTextAC = (message: string) => ({type: "NEW_MESSAGE_TEXT", body: message} as const)
export const SendMessageAC = () => ({type: "SEND-MESSAGE"} as const)
