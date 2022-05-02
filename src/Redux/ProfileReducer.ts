import {v1} from "uuid";

export type PostsType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState:ProfilePageType = {
    posts: [
        {id: v1(), message: "I am samurai", likes: 5},
        {id: v1(), message: "I am ninja", likes: 10},
        {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
    ],
    newPostText: "",
}
type ActionType = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostTextAC>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state, posts: [...state.posts, {
                    id: v1(),
                    message: state.newPostText,
                    likes: ~~(Math.random() * 45),
                }], newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}
        default:
            return {...state}
    }
}

export const AddPostAC = () => ({type: "ADD-POST"} as const)

export const UpdateNewPostTextAC = (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
} as const)