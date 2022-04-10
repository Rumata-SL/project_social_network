import React, {FC} from "react";
import img from "./MyPostImage/social_logo.png"
import up from "./MyPost.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/State";

type TypePropsUserPost = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPost: FC<TypePropsUserPost> = ({addPost, newPostText, updateNewPostText, posts}) => {

    let user = posts.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })

    // let newPostElement = React.createRef<HTMLInputElement>();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        addPost();
        /*if (newPostElement.current) {
            addPost(newPostElement.current.value);
            updateNewPostText("")
        }*/
        // newPostElement.current.value = "";
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            updateNewPostText(newPostElement.current.value);
            // newPostElement.current.value = "";
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
                        {/*<input ref={newPostElement} placeholder={"Your text"}/>*/}
                        <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
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
