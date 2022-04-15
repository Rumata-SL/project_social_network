import React, {FC} from "react";
import {MyPost} from "./MyPost";
import {StoreType} from "../../../Redux/Store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";


type TypePropsUserPost = {
    store: StoreType

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
