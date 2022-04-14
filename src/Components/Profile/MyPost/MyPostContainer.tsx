import React, {FC} from "react";
import {MyPost} from "./MyPost";
import {ActionType, PostsType, StoreType} from "../../../Redux/State";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";


type TypePropsUserPost = {
    store: StoreType
    // newPostText: string
    // posts: Array<PostsType>
    // dispatch: (action: ActionType) => void
}

export const MyPostContainer: FC<TypePropsUserPost> = (
    {
        store,
        /*posts,
        dispatch,
        newPostText,*/
    }
) => {
    let state = store.getState()

    const addMessage = () => {
        store.dispatch(AddPostAC(state.profilePage.newPostText));
    }

    const onPostChange = (text: string) => {
        if (text) {
            store.dispatch(UpdateNewPostTextAC(text));
        }
    }
    return (
        <MyPost
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            upDateaddMessage={addMessage}
            upDateNewWPostText={onPostChange}
        />
    )
}
