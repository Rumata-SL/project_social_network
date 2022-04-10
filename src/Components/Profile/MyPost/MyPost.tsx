import React, {FC} from "react";
import img from "./MyPostImage/social_logo.png"
import up from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {actionType, PostsType} from "../../../Redux/State";
import actions from "redux-form/lib/actions";

type TypePropsUserPost = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: actionType) => void

    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

export const MyPost: FC<TypePropsUserPost> = (
    {
        posts,
        newPostText,
        dispatch,
        // addPost,
        // updateNewPostText,
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
        dispatch({type: "ADD-POST", newPostText});
    }
    const onPostChange = () => {

        if (newPostElement.current) {
            dispatch({type: "UPDATE-NEW-POST-TEXT", newText: newPostElement.current.value});
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
