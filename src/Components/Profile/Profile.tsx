import React from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";


export type TypePropsMyPost = {
    id: number,
    message: string,
    likes:number
}

const users: Array<TypePropsMyPost> = [
    {id: 1, message: "I am samurai", likes: 5},
    {id: 2, message: "I am ninja", likes: 10},
    {id: 3, message: "I am Satoshi Nakamoto", likes: 15},
]

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPost users={users}/>
        </div>
    )
}
export default Profile