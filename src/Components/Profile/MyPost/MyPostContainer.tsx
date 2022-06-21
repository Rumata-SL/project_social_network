import React from "react";
import {compose, Dispatch} from "redux";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStoreType} from "../../../Redux/reducers/reduxStore";
import {AddPostAC} from "../../../Redux/reducers/ProfileReducer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        upDateAddMessage: (newPostText:string) => {
            dispatch(AddPostAC(newPostText));
        },
    }
}

export const MyPostContainer = compose(connect(mapStateToProps, mapDispatchToProps))(MyPost)

// export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
