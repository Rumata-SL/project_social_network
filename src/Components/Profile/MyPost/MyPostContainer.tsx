import React from "react";
import {Dispatch} from "redux";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStoreType} from "../../../Redux/reduxStore";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/ProfileReducer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        upDateAddMessage: () => {
            dispatch(AddPostAC());
        },
        upDateNewPostText: (text: string) => {
            if (text) {
                dispatch(UpdateNewPostTextAC(text));
            }
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
