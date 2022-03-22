import React, {FC} from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";
import {TypePropsMyPost} from "../../index";
// import {v1} from "uuid";


/*export type TypePropsMyPost = {
    id: string,
    message: string,
    likes:number
}

const usersPost: Array<TypePropsMyPost> = [
    {id: v1(), message: "I am samurai", likes: 5},
    {id: v1(), message: "I am ninja", likes: 10},
    {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
    {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
]*/
type ProfileTypePost ={
    posts:Array<TypePropsMyPost>
}

const Profile: FC<ProfileTypePost> = ({posts}) => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPost posts={posts}/>
        </div>
    )
}
export default Profile