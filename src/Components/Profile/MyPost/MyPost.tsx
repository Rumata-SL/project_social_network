import React, {FC} from "react";
import img from "./MyPostImage/social_logo.png"
import up from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {ActionType, AddPostAC, PostsType, UpdateNewPostTextAC} from "../../../Redux/State";


type TypePropsUserPost = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPost: FC<TypePropsUserPost> = (
    {
        posts,
        newPostText,
        dispatch,
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
        dispatch(AddPostAC(newPostText));
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch(UpdateNewPostTextAC(newPostElement.current.value));
        }
    }
    return (
        <div className={up.content}>
            <div className={up.container_content_social_logo}>
                <div className={up.box1}>
                    <img className={up.content_social_logo} src={img} alt="ninja"/>
                    AVA Description
                </div>
            </div>
            <div className={up.box3}>
                My post
                <div>
                    <div>
                        {/*<textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>*/}
                        <input onChange={onPostChange} ref={newPostElement} value={newPostText} placeholder={"text"}/>
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
