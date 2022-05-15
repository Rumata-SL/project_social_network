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