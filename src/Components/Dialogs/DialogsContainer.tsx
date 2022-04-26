import React from "react";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
