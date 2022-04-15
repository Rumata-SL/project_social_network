import {v1} from "uuid";
import {AddPostAC, profileReducer, UpdateNewPostTextAC} from "./ProfileReducer";
import {messageReducer, NewMessageTextAC, SendMessageAC} from "./MessageReducer";
import {sideBarReducer} from "./SideBarReducer";

export type ActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof NewMessageTextAC>
    | ReturnType<typeof SendMessageAC>

export type PostsType = {
    id: string,
    message: string,
    likes: number
}
export type MessagesType = {
    id: string,
    message: string,
}
export type UsersType = {
    id: string,
    name: string,
}
export type NewsType = {
    id: string
    title: string
}
export type SideBarType = {
    news: Array<NewsType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string

}
export type MessagesPageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: StateType
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "I am samurai", likes: 5},
                {id: v1(), message: "I am ninja", likes: 10},
                {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
            ],
            newPostText: "",
        },
        messagesPage: {
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
        },
        sideBar: {
            news: [
                {id: v1(), title: "1"},
                {id: v1(), title: "2"},
                {id: v1(), title: "3"},
            ],
        },
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this.rerenderEntireTree();

    }
}

