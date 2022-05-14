import React, {FC} from "react";
import {Post} from "./Post/Post";
import up from "./MyPost.module.css"
import img from "./MyPostImage/social_logo.png"
import {PostsType} from "../../../Redux/ProfileReducer";


type TypePropsUserPost = {
    newPostText: string
    posts: Array<PostsType>
    upDateAddMessage: () => void
    upDateNewPostText: (text: string) => void
}

export const MyPost: FC<TypePropsUserPost> = (
    {
        posts,
        newPostText,
        upDateAddMessage,
        upDateNewPostText,
    }
) => {

    let user = posts.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    let newPostElement = React.createRef<HTMLInputElement>();

    const addMessage = () => {
        upDateAddMessage()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            upDateNewPostText(newPostElement.current.value)
        }
    }
    return (
        <div className={up.content}>
            {/*<div className={up.container_content_social_logo}>
                <div className={up.box1}>
                    <img className={up.content_social_logo} src={img} alt="ninja"/>
                    AVA Description
                </div>
            </div>*/}
            <div className={up.box3}>
                My post
                <div>
                    <div>
                        {/*<textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>*/}
                        <input onChange={onPostChange} ref={newPostElement}
                               value={newPostText}
                               placeholder={"Your text"}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={up.user}>
                {user}
            </div>
        </div>
    )
}
