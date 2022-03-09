import React, {FC} from "react";
import post from "./Post.module.css"
import avatar from "./Post_image/avatar.png"

type postProps = {
    message: string,
    likes: number
}

const Post:FC<postProps>=({message,likes})=> {
    return (
        <div className={post.container_post}>
            <span>{likes}</span>
            <img className={post.ava} src={avatar} alt={avatar}/>
            {message}
        </div>
    )
}
export default Post