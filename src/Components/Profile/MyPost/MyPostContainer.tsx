import {Store} from "redux";
import React, {FC} from "react";
import {MyPost} from "./MyPost";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";


type TypePropsUserPost = {
    store: Store

}

export const MyPostContainer: FC<TypePropsUserPost> = ({store,}) => {
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
            upDateaddMessage={addMessage}
            posts={state.profilePage.posts}
            upDateNewWPostText={onPostChange}
            newPostText={state.profilePage.newPostText}
        />
    )
}
