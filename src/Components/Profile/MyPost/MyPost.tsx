import React, {FC} from "react";
import {Post} from "./Post/Post";
import up from "./MyPost.module.css"
import {PostsType} from "../../../Redux/ProfileReducer";
import {AddPostReduxForm, FormDataType} from "./Post/AddNewPostForm";



type TypePropsUserPost = {
    posts: Array<PostsType>

    upDateAddMessage: (newPostText:string) => void
}

export const MyPost: FC<TypePropsUserPost> = (props) => {
    const {posts, upDateAddMessage,} = props

    let user = posts.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })

    const Submit = (values: FormDataType) => {
        upDateAddMessage(values.newPostText)
    }

    return (
        <div className={up.content}>
            <div className={up.box3}>
                My post
                <div>
                    <AddPostReduxForm onSubmit={Submit}/>

                </div>
            </div>
            <div className={up.user}>
                {user}
            </div>
        </div>
    )
}



