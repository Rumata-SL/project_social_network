import React, {FC} from "react";
import p from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {ProfileType} from "../../Redux/ProfileReducer";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfilePropsType = {
    status: string
    profile: ProfileType | null

    updateUserStatus: (status: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
const {profile, status, updateUserStatus} = props

    return (
        <div className={p.content}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}/>
            <MyPostContainer/>
        </div>
    )
}