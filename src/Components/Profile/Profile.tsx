import React, {FC} from "react";
import p from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {ProfileType} from "../../Redux/reducers/ProfileReducer";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfilePropsType = {
    status: string
    profile: ProfileType | null
    isOwner: boolean

    updateUserStatus: (status: string) => void
    savePhoto: (file: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {profile, status, isOwner, updateUserStatus, savePhoto} = props

    return (
        <div className={p.content}>
            <ProfileInfo
                profile={profile}
                status={status}
                isOwner={isOwner}
                updateUserStatus={updateUserStatus} savePhoto={savePhoto}
            />

            <MyPostContainer/>
        </div>
    )
}