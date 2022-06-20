import {
    AddPostAC,
    DeletePostAC,
    ProfilePageType,
    profileReducer
} from "./ProfileReducer";
import {v1} from "uuid";

let startState: ProfilePageType

beforeEach(()=>{
   startState = {
        posts: [
            {id: v1(), message: "I am samurai", likes: 5},
            {id: v1(), message: "I am ninja", likes: 10},
            {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
            {id: v1(), message: "I am Satoshi Nakamotogyj", likes: 1},
        ],
        // newPostText: "",
        profile: null,
        status: "",
    }
})

it("new post should be added", () => {
    let action = AddPostAC("blabla")
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(5)
})

it("new post should be added message", () => {
    let action = AddPostAC("blabla")
    let newState = profileReducer(startState, action)

    expect(newState.posts[4].message).toBe("blabla")
})
it.skip("after deleting length of messages should be decrement", () => {
    let action = DeletePostAC('2')
    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(3)
})