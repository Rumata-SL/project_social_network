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


import {usersApi} from "../API/api";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialStateUsers: StateUsersType = {
    items: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

type ActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const usersReducer = (state: StateUsersType = initialStateUsers, action: ActionType): StateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {
                    ...el,
                    followed: true
                } : el)
            }
        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {
                    ...el,
                    followed: false
                } : el)
            }
        case "SET_USERS":
            return {...state, items: action.items}
        // return {...state, items: [...action.items, ...state.items ]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            debugger
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export const follow = (id: number) => ({type: "FOLLOW", userId: id} as const)
export const unFollow = (id: number) => ({
    type: "UNFOLLOW",
    userId: id
} as const)
export const setUsers = (items: Array<UsersType>) => ({
    type: "SET_USERS",
    items: items
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: "SET_CURRENT_PAGE",
    currentPage: currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, id: number) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    id,
} as const)


/*
export type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>
export type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, ActionType>

export const getUsersThunkCreator  = (currentPage: number, pageSize: number)=>{
    return (dispatch)=>{
    dispatch(toggleIsFetching(true))

    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    })}
}*/

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
