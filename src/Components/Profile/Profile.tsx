import React, {FC} from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ActionType, PostsType, StoreType,} from "../../Redux/State";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfileTypePost = {
    store: StoreType
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionType) => void
}

export const Profile: FC<ProfileTypePost> = (
    {
        store,
        // posts,
        // newPostText,
        // dispatch
    }
) => {

    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPostContainer
                store={store}
                /*posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}*/
            />
        </div>
    )
}