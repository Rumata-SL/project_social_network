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
    saveProfile: (profile: ProfileType | null) => Promise<ProfileType | null>
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {
        profile,
        status,
        isOwner,
        updateUserStatus,
        savePhoto,
        saveProfile
    } = props

    return (
        <div className={p.content}>
            <ProfileInfo
                profile={profile}
                status={status}
                isOwner={isOwner}
                updateUserStatus={updateUserStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />

            <MyPostContainer/>
        </div>
    )
}