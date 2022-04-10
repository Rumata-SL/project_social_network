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
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string

}
export type MessagesPageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type StoreType = {
    _state: StateType
    rerenderEntireTree: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType

}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "I am samurai", likes: 5},
                {id: v1(), message: "I am ninja", likes: 10},
                {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
            ],
            newPostText: "Your text Your text",
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
    },
    rerenderEntireTree() {
    },
    addPost() {
        const newPost: PostsType = {

            id: v1(),
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this.rerenderEntireTree();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree();
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state;
    }
}
// window.store = store

/*let rerenderEntireTree = () => {
}*/
/*export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "I am samurai", likes: 5},
            {id: v1(), message: "I am ninja", likes: 10},
            {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
        ],
        newPostText: "Your text Your text",
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
}*/

/*export const addPost = () => {
    const newPost: PostsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likes: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree();
}*/

/*export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree();
}*/
/*export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}*/


