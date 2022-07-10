import React, {FC} from "react";
import ava from "./Profile_image/ava.png"
import up from "./MyPost/MyPost.module.css";
import {Preloader} from "../../common/preloader/Preloaded";
import {ProfileType,} from "../../Redux/reducers/ProfileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean

    updateUserStatus: (status: string) => void
    savePhoto: (file: string) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
                                                          profile,
                                                          status,
                                                          isOwner,
                                                          updateUserStatus,
                                                          savePhoto
                                                      }) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: { target: any }) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <hr/>
            <div className={up.container_content_social_logo}>
                <div className={up.box1}>
                    <img
                        src={profile.photos.small !== null ? profile.photos.small : ava}
                        alt="image" width={200}/>
                    {isOwner && <div><input type={"file"}
                                            onChange={onMainPhotoSelected}/>
                    </div>}
                    <div>AboutMe: {profile.aboutMe}</div>
                    <div>Looking For A Job
                        : {profile.lookingForAJobDescription}</div>
                </div>
                <div>Full Name : {profile.fullName}</div>
            </div>
            <ProfileStatusWithHooks status={status}
                                    updateUserStatus={updateUserStatus}/>
            {/*<ProfileStatus status={status} updateUserStatus={updateUserStatus}/>*/}
            <hr/>
        </div>
    );
};

