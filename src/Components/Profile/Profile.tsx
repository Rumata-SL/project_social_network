import React, {FC} from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";
import {PostsType, StateType, addPost} from "../../Redux/State";


type ProfileTypePost = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const Profile: FC<ProfileTypePost> = ({posts}) => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPost posts={posts} addPost={addPost}/>
        </div>
    )
}
export default Profile