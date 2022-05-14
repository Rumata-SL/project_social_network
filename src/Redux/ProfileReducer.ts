import {v1} from "uuid";

export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type PostsType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "I am samurai", likes: 5},
        {id: v1(), message: "I am ninja", likes: 10},
        {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
    ],
    newPostText: "",
    profile: null,
}
type ActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof setUsersProfile>

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
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return {...state}
    }
}

export const AddPostAC = () => ({type: "ADD-POST"} as const)

export const UpdateNewPostTextAC = (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
} as const)
export const setUsersProfile = (profile: ProfileType) => ({
    type: "SET_USER_PROFILE",
    profile
} as const)