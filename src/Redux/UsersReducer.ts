import {v1} from "uuid";
import foto from "./foto.jpg"


/*type LocationType = {
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
}*/

export type UsersType = {
    id: number
    photos: {
        small: string
        large: string
    } | null
    followed: boolean
    name: string
    status: null | string
    uniqueUrlName: null | string
}

export type StateUsersType = {
    items: Array<UsersType>
}

const initialStateUsers: StateUsersType = {
    items: []
}
/*type InitialStateType = {
    users: Array<UserType>
}*/
/*let initialState: InitialStateType = {
    users: [/!*
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
        },*!/
    ]
}*/


type ActionType =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>

export const usersReducer = (state: StateUsersType = initialStateUsers, action: ActionType): StateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {...state, items: [...state.items, ...action.items]}
        default:
            return state
    }
}

export const FollowAC = (id: number) => ({type: "FOLLOW", userId: id} as const)
export const UnFollowAC = (id: number) => ({type: "UNFOLLOW", userId: id} as const)
export const SetUsersAC = (items: Array<UsersType>) => ({type: "SET_USERS", items: items} as const)

