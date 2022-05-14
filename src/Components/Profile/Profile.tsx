import React, {FC} from "react";
import p from "./Profile.module.css"
import logo from "./Profile_image/content_logo.jpg"
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/ProfileReducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile: FC<ProfilePropsType> = ({profile}) => {

    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPostContainer/>
        </div>
    )
}