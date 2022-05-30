import React, {FC} from "react";
import p from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";
import logo from "./Profile_image/content_logo.jpg"
import {ProfileType} from "../../Redux/ProfileReducer";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfilePropsType = {
    profile: ProfileType |null
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {

    return (
        <div className={p.content}>
            {/*<div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>*/}
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
        </div>
    )
}