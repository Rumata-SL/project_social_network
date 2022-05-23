import React, {FC} from "react";
import p from "./Profile.module.css"
import logo from "./Profile_image/content_logo.jpg"
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/ProfileReducer";
import {ProfileInfo} from "./ProfileInfo";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType |null
    // isAuth:boolean
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {

    // if(isAuth === false)return <Redirect to={"/login"}/>
    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
        </div>
    )
}