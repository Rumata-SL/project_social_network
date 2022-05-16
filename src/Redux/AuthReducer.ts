export type StateUsersType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialStateUsers: StateUsersType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

type ActionType =
    ReturnType<typeof setAuthUserData>


export const authReducer = (state: StateUsersType = initialStateUsers, action: ActionType): StateUsersType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data, isAuth:true}
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: "SET_USER_DATA",
    data: {id, email, login}
} as const)

