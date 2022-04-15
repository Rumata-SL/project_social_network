import React, {FC} from "react";
import logo from "./Profile_image/content_logo.jpg"
import p from "./Profile.module.css"
import {StoreType,} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type ProfileTypePost = {
    store: StoreType
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