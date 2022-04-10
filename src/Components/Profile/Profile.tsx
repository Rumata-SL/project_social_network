import React, {FC} from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {actionType, PostsType,} from "../../Redux/State";


type ProfileTypePost = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: actionType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

export const Profile: FC<ProfileTypePost> = (
    {
        posts,
        newPostText,
        dispatch
        // addPost,
        // updateNewPostText
    }
) => {

    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPost
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
                // addPost={addPost}
                // updateNewPostText={updateNewPostText}
            />
        </div>
    )
}