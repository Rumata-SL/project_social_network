import React, {FC} from "react";
import img from "./UserPostImage/social_logo.png"
import up from "./UserPost.module.css"
import Post from "./Post";

export type TypePropsUserPost = {
    id: number,
    message: string,
    likes:number
}
const users = [
    {id: 1, message: "I am samurai", likes: 5},
    {id: 2, message: "I am ninja", likes: 10},
    {id: 3, message: "I am Satoshi Nakamoto", likes: 15},
]

const UserPost: FC<TypePropsUserPost> = () => {

    let user = users.map(item => {
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
export default UserPost