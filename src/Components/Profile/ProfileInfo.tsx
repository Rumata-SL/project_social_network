import React, {FC} from "react";
import up from "./MyPost/MyPost.module.css";
import img from "./MyPost/MyPostImage/social_logo.png";
import {ProfileType,} from "../../Redux/ProfileReducer";
import {Preloader} from "../Users/Preloaded";
import ava from "./Profile_image/ava.png"
// import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
                                                          profile,
                                                          status,
                                                          updateUserStatus
                                                      }) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <hr/>
            <div className={up.container_content_social_logo}>
                <div className={up.box1}>
                    {/*<img className={up.content_social_logo} src={img}
                         alt="ninja"/>*/}
                    <img
                        src={profile.photos.small !== null ? profile.photos.small : ava}
                        alt="image" width={45}/>
                    <div>AboutMe: {profile.aboutMe}</div>
                    <div>Looking For A Job
                        : {profile.lookingForAJobDescription}</div>
                </div>
                <div>Full Name : {profile.fullName}</div>
            </div>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            {/*<ProfileStatus status={status} updateUserStatus={updateUserStatus}/>*/}
            <hr/>
        </div>
    );
};

