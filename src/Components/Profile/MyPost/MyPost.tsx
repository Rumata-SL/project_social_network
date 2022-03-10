import React, {FC} from "react";
import img from "./MyPostImage/social_logo.png"
import up from "./MyPost.module.css"
import Post from "./Post/Post";
import {TypePropsMyPost} from "../Profile";

type TypePropsUserPost = {
    user: Array<TypePropsMyPost>
}


const MyPost: FC<TypePropsUserPost> = (props: TypePropsUserPost) => {

    let user = props.user.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })

    return (
        <div className={up.content}>
            <div className={up.container_content_social_logo}>

                <div className={up.box1}>
                    <img className={up.content_social_logo} src={img} alt="ninja"/>
                </div>

                <div className={up.box2}>
                    <h4>AVA Description</h4>
                </div>

            </div>
            <div>
                <h6>My post</h6>
                <div><textarea>post</textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={up.user}>
                {user}
            </div>

        </div>
    )
}
export default MyPost