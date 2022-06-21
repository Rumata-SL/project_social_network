import {authReducer, setAuthUserData, StateUsersType} from "../reducers/AuthReducer";

let initialState: StateUsersType

beforeEach(() => {
    initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    }
})

test("auth test",()=>{
    const state = authReducer(initialState,setAuthUserData(3, "aeacd@cvb", "AURUS", true))
    expect(state.id).toBe(3)
})
test("login must be added",()=>{
    const state = authReducer(initialState,setAuthUserData(3, "aeacd@cvb", "AURUS", true))
    expect(state.login).toBe("AURUS")
})
test("status should change",()=>{
    const state = authReducer(initialState,setAuthUserData(3, "aeacd@cvb", "AURUS", true))
    expect(state.isAuth).toBe(true)
})