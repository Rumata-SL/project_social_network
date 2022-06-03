import React from "react";
import {compose, Dispatch} from "redux";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStoreType} from "../../../Redux/reduxStore";
import {AddPostAC} from "../../../Redux/ProfileReducer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        posts: state.profilePage.posts
        // newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        upDateAddMessage: (newPostText:string) => {
            dispatch(AddPostAC(newPostText));
        },
        /*upDateNewPostText: (text: string) => {
            if (text) {
                dispatch(UpdateNewPostTextAC(text));
            }
        }*/
    }
}

export const MyPostContainer = compose(connect(mapStateToProps, mapDispatchToProps))(MyPost)

// export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
