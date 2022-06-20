import {v1} from "uuid";
import {profileApi, usersApi} from "../API/api";
import {AppStoreType} from "./reduxStore";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

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
    // newPostText: string
    profile: null | ProfileType
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "I am samurai", likes: 5},
        {id: v1(), message: "I am ninja", likes: 10},
        {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
    ],
    // newPostText: "",
    profile: null,
    status: "",
}
type ActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof DeletePostAC>
// | ReturnType<typeof UpdateNewPostTextAC>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case "Profile/ADD-POST":
            return {
                ...state, posts: [...state.posts, {
                    id: v1(),
                    message: action.newPostText,
                    likes: ~~(Math.random() * 45),
                }],
                // }], newPostText: ""
            }
        /*case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}*/
        case "Profile/SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "Profile/SET_STATUS":
            return {...state, status: action.status}
        case "Profile/DELETE-POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId ? action.postId : p)
            }
        }
        default:
            return {...state}
    }
}

export const AddPostAC = (newPostText: string) => ({
    type: "Profile/ADD-POST",
    newPostText
} as const)
export const DeletePostAC = (postId: string) => ({
    type: "Profile/DELETE-POST",
    postId
} as const)

/*export const UpdateNewPostTextAC = (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
} as const)*/

export const setUsersProfile = (profile: ProfileType) => ({
    type: "Profile/SET_USER_PROFILE",
    profile,
} as const)

export const setStatus = (status: string) => ({
    type: "Profile/SET_STATUS",
    status,
} as const)

export const getUserProfile = (userId: string): ThunkAction<void, AppStoreType, unknown, ActionType> => async (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    const response = await usersApi.getProfile(userId)
    // .then(response => {
    dispatch(setUsersProfile(response))
    // })
}
export const getUserStatus = (userId: string): ThunkAction<void, AppStoreType, unknown, ActionType> => async (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    const response = await profileApi.getStatus(userId)
    // .then(response => {
    dispatch(setStatus(response))
    // })
}
export const updateUserStatus = (status: string): ThunkAction<void, AppStoreType, unknown, ActionType> => async (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
    const response = await profileApi.upDateStatus(status)
    // .then(response => {
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
    // })
}


/*
{
    aboutMe: "я круто чувак 1001%",
        contacts: {
    facebook: "facebook.com",
        website: null,
        vk: "vk.com/dimych",
        twitter: "https://twitter.com/@sdf",
        instagram: "instagra.com/sds",
        youtube: null,
        github: "github.com",
        mainLink: null
},
    lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
    fullName: "samurai dimych",
    userId: 2,
    photos: {
    small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
}
}*/
// type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionType>
// type ThunkDispatchType = ThunkDispatch<AppStoreType, unknown, ActionType>