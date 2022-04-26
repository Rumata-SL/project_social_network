import {v1} from "uuid";
import foto from "./foto.jpg"


type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: string
    fotoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type InitialStateType = {
    users: Array<UserType>
}
let initialState: InitialStateType = {
    users: [/*
        {
            id: v1(),
            fotoUrl: foto,
            followed: true,
            fullName: "Sergey",
            status: "I am boss",
            location: {city: "Kurgan", country: "Russia"}
        },
        {
            id: v1(),
            fotoUrl: foto,
            followed: false,
            fullName: "Kirill",
            status: "I am jun",
            location: {city: "Ekb", country: "Russia"}
        },
        {
            id: v1(),
            fotoUrl: foto,
            followed: true,
            fullName: "Egor",
            status: "I am middle",
            location: {city: "Ekb", country: "Russia"}
        },
        {
            id: v1(),
            fotoUrl: foto,
            followed: false,
            fullName: "Efim",
            status: "I am web developer",
            location: {city: "Tumen", country: "Russia"}
        },*/
    ]
}
type ActionType =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.user]}
        default:
            return state
    }
}

export const FollowAC = (id: string) => ({type: "FOLLOW", userId: id} as const)
export const UnFollowAC = (id: string) => ({type: "UNFOLLOW", userId: id} as const)
export const SetUsersAC = (user: Array<UserType>) => ({type: "SET_USERS", user: user} as const)

