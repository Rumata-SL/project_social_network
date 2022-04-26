import React from "react";
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
const mapDispatchToProps = (dispatch: any) => {
    return {
        upDateaddMessage: () => {
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


// import {Store} from "redux";
// import {ProfilePageType, StateType} from "../../../Redux/Store";


/*type TypePropsUserPost = {
    store: AppStoreType

}*/

/*export const MyPostContainer: FC<TypePropsUserPost> = ({store}) => {
    let state = store.getState()

    const addMessage = () => {
        store.dispatch(AddPostAC(state.profilePage.newPostText));
    }

    const onPostChange = (text: string) => {
        if (text) {
            store.dispatch(UpdateNewPostTextAC(text));
        }
    }
    return (
        <MyPost
            upDateaddMessage={addMessage}
            posts={state.profilePage.posts}
            upDateNewWPostText={onPostChange}
            newPostText={state.profilePage.newPostText}
        />
    )
}*/