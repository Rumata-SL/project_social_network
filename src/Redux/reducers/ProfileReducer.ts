import {v1} from "uuid";
import {profileApi, usersApi} from "../../API/api";
import {ThunkType} from "./reduxStore";


export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
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
export type ProfileActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof DeletePostAC>
    | ReturnType<typeof savePhotoSuccess>
// | ReturnType<typeof UpdateNewPostTextAC>

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {

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
        case "Profile/SAVE_PHOTO_SUCCESS": {
            return {
                ...state,
                profile: {...state.profile!, photos: action.photos}
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

export const setUsersProfile = (profile: ProfileType | null) => ({
    type: "Profile/SET_USER_PROFILE",
    profile,
} as const)

export const setStatus = (status: string) => ({
    type: "Profile/SET_STATUS",
    status,
} as const)

export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: "Profile/SAVE_PHOTO_SUCCESS",
        photos
    } as const
}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    const response = await usersApi.getProfile(userId)
    // .then(response => {
    dispatch(setUsersProfile(response.data))
    // })
}
export const getUserStatus = (userId: string): ThunkType => async (dispatch) => {
    const response = await profileApi.getStatus(userId)
    // .then(response => {
    dispatch(setStatus(response.data))
    // })
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileApi.upDateStatus(status)
    // .then(response => {
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
    // })
}
export const savePhoto = (file: string): ThunkType => async (dispatch) => {
    const response = await profileApi.savePhoto(file)
    // .then(response => {
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
    // })
}

export const saveProfile = (profile: ProfileType | null): ThunkType => async (dispatch, getState) => {
    const response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.id))
    }
    /*if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }*/
}

