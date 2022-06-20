import {
    messageReducer,
    MessagesPageType,
    SendMessageAC
} from "./MessageReducer";
import {v1} from "uuid";

let initialState:MessagesPageType

beforeEach(()=>{
    initialState={
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
        // newMessageText: "",
    }
})

test("should be added new message", ()=>{
    const state = messageReducer(initialState, SendMessageAC("Hello world"))
    expect(state.messages.length).toBe(6)
})
test("should be new message", ()=>{
    const state = messageReducer(initialState, SendMessageAC("Hello world"))
    expect(state.messages[5].message).toBe("Hello world")
})