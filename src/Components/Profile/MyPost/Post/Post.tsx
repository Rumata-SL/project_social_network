import React, {FC} from "react";
import post from "./Post.module.css"
import avatar from "./Post_image/avatar.png"

type postProps = {
    message: string,
    likes: number
}

const Post: FC<postProps> = ({message, likes}) => {
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
export default Post