import React, {FC} from "react";
import {ActionType, PostsType} from "../../../Redux/State";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPost} from "./MyPost";


type TypePropsUserPost = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPostContainer: FC<TypePropsUserPost> = (
    {
        posts,
        newPostText,
        dispatch,
    }
) => {

    /*let user = posts.map(item => {
        return (
            <div key={item.id}>
                <Post message={item.message} likes={item.likes}/>
            </div>
        )
    })*/

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    // let newPostElement = React.createRef<HTMLInputElement>();

    const addMessage = () => {
        dispatch(AddPostAC(newPostText));
    }

    const onPostChange = (text: string) => {
        if (text) {
            dispatch(UpdateNewPostTextAC(text));
        }
    }
    return (
        <MyPost upDateNewWPostText={onPostChange} upDateaddMessage={addMessage} posts={posts}
                newPostText={newPostText}/>
        // <MyPost posts={} newPostText={} dispatch={}/>
    )
}
