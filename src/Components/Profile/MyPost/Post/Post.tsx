import React, {FC} from "react";
import post from "./Post.module.css"
import avatar from "./Post_image/avatar.png"

type postPropsType = {
    message: string,
    likes: number
}

export const Post: FC<postPropsType> = ({message, likes}) => {
    return (
        <div className={post.container_post}>

            <div>
            <img className={post.ava} src={avatar} alt={avatar}/>
            </div>
            <div className={post.containerLikes}>
                <span className={post.likes}>{likes}</span>
            </div>
            <div className={post.message}>
            {message}
            </div>
        </div>
    )
}
