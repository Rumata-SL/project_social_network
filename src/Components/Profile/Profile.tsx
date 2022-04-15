import {Store} from "redux";
import React, {FC} from "react";
import p from "./Profile.module.css"
import logo from "./Profile_image/content_logo.jpg"
import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfileTypePost = {
    store: Store
}

export const Profile: FC<ProfileTypePost> = ({store,}) => {

    return (
        <div className={p.content}>
            <div>
                <img className={p.logo} src={logo} alt="fudzi"/>
            </div>
            <MyPostContainer
                store={store}
            />
        </div>
    )
}