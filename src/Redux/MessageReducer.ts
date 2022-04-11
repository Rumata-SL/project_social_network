import {ActionType, MessagesPageType} from "./State";
import {v1} from "uuid";

export const messageReducer = (state: MessagesPageType, action: ActionType) => {
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
            return state;
    }
}

export const NewMessageTextAC = (message: string) => ({type: "NEW_MESSAGE_TEXT", body: message} as const)
export const SendMessageAC = () => ({type: "SEND-MESSAGE"} as const)
