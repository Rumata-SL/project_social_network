import React, {FC} from "react";
import up from "./MyPost/MyPost.module.css";
import img from "./MyPost/MyPostImage/social_logo.png";
import {ProfileType} from "../../Redux/ProfileReducer";
import {Preloader} from "../Users/Preloaded";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {
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
                    <img src={profile.photos.small} alt="image"/>
                    <div>AboutMe: {profile.aboutMe}</div>
                    <div>Looking For A Job
                        : {profile.lookingForAJobDescription}</div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

