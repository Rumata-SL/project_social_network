import React from "react";
import {Dispatch} from "redux";
import {Dialogs, DialogsTypeProps} from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";
import {Redirect} from "react-router-dom";
import {ProfileContainer} from "../Profile/ProfileContainer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onNewMessageChange: (body: string) => {
            dispatch(NewMessageTextAC(body))
        },
        onSendMessageClick: () => {
            dispatch(SendMessageAC())
        }
    }
}

const RedirectComponent = (props:DialogsTypeProps) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return <Dialogs {...props}/>

}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent)
