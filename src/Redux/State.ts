import {v1} from "uuid";


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
type ProfilePageType = {
    posts: Array<PostsType>
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "I am samurai", likes: 5},
            {id: v1(), message: "I am ninja", likes: 10},
            {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
        ],
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
    },
}
export const addPost = (postMessage: string) =>{
    let newPost = {
        id: v1(),
        message: postMessage,
        likes: 7
    }
    state.profilePage.posts.push(newPost);
}