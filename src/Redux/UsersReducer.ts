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
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "./reduxStore";

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
    pageSize: 5,
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
        case "USERS/FOLLOW":
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {
                    ...el,
                    followed: true
                } : el)
            }
        case "USERS/UNFOLLOW":
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {
                    ...el,
                    followed: false
                } : el)
            }
        case "USERS/SET_USERS":
            return {...state, items: action.items}
        // return {...state, items: [...action.items, ...state.items ]}
        case "USERS/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "USERS/SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "USERS/TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "USERS/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export const follow = (id: number) => ({type: "USERS/FOLLOW", userId: id} as const)
export const unFollow = (id: number) => ({
    type: "USERS/UNFOLLOW",
    userId: id
} as const)
export const setUsers = (items: Array<UsersType>) => ({
    type: "USERS/SET_USERS",
    items: items
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: "USERS/SET_CURRENT_PAGE",
    currentPage: currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "USERS/SET_TOTAL_USERS_COUNT",
    totalUsersCount: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "USERS/TOGGLE_IS_FETCHING",
    isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, id: number) => ({
    type: "USERS/TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    id,
} as const)


export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkAction<void, AppStoreType, unknown, ActionType> => {
    return async (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
        dispatch(toggleIsFetching(true))

        let response = await usersApi.getUsers(currentPage, pageSize)
            // .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))

        // })
    }
}

export const following = (userId: number): ThunkAction<void, AppStoreType, unknown, ActionType> => {
    return (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.setFollow(userId).then(() => dispatch(follow(userId)))
            .then(() => dispatch(toggleFollowingProgress(false, userId)))
    }
}

export const unfollowing = (userId: number): ThunkAction<void, AppStoreType, unknown, ActionType> => {
    return (dispatch: ThunkDispatch<AppStoreType, unknown, ActionType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.setUnFollow(userId).then(() => dispatch(unFollow(userId)))
            .then(() => dispatch(toggleFollowingProgress(false, userId)))
    }
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
/*export const unfollowing = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.setUnFollow(userId)
            .then(() => {
                dispatch(unFollow(userId));
                dispatch(toggleFollowingProgress(false, userId))
            })

    }
}*/
/*export const following = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.setFollow(userId)
            .then(() => {
                dispatch(follow(userId));
                dispatch(toggleFollowingProgress(false, userId))
            })

    }
}*/

// type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionType>
// type ThunkDispatchType = ThunkDispatch<AppStoreType, unknown, ActionType>