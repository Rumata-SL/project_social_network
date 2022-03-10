import React from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import UserPost from "./UserPost";

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <UserPost/>
        </div>
    )
}
export default Profile