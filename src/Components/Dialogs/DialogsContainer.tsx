import React from "react";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
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

export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))



/*const RedirectComponent = (props:DialogsTypeProps) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return <Dialogs {...props}/>
}*/