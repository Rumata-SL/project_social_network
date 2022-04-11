import {ActionType, PostsType, ProfilePageType} from "./State";
import {v1} from "uuid";

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: action.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state

    }
}


export const AddPostAC = (postText: string) => ({type: "ADD-POST", newPostText: postText} as const)

export const UpdateNewPostTextAC = (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
} as const)