import {ActionType, PostsType, ProfilePageType} from "./Store";
import {v1} from "uuid";

let initialState = {
    posts: [
        {id: v1(), message: "I am samurai", likes: 5},
        {id: v1(), message: "I am ninja", likes: 10},
        {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
    ],
    newPostText: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let randomlikes = Math.floor(Math.random() * 25)
            /*const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likes: randomlikes,
            }*/
            // state.posts.push(newPost);
            // state.newPostText = "";
            return {
                ...state, posts: [...state.posts, {
                    id: v1(),
                    message: state.newPostText,
                    likes: randomlikes,
                }], newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            // state.newPostText = action.newText
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