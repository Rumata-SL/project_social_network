import React, {FC} from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {PostsType,} from "../../Redux/State";
// import {PostsType, addPost, updateNewPostText} from "../../Redux/State";


type ProfileTypePost = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile: FC<ProfileTypePost> = ({posts, newPostText, ...rest}) => {

    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPost
                posts={posts}
                addPost={rest.addPost}
                newPostText={newPostText}
                updateNewPostText={rest.updateNewPostText}
            />
        </div>
    )
}