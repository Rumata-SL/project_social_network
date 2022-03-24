import React, {FC} from "react";
import img from "./MyPostImage/social_logo.png"
import up from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {PostsType, state} from "../../../Redux/State";

type TypePropsUserPost = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const MyPost: FC<TypePropsUserPost> = ({addPost}) => {
    let user = state.profilePage.posts.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })
    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    let newPostElement = React.createRef<HTMLInputElement>();
    const addMessage = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value);
            newPostElement.current.value = "";
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
                    <input ref={newPostElement} placeholder={"Your text"}/>
                    {/*<textarea ref={newPostElement} placeholder={"Your text"}></textarea>*/}
                    <button onClick={addMessage}>+</button>
                </div>
            </div>
            <div className={up.user}>
                {user}
            </div>
        </div>
    )
}
