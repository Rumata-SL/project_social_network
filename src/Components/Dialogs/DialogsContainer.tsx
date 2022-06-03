import React from "react";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {MessagesPageType, SendMessageAC} from "../../Redux/MessageReducer";
// import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";


const mapStateToProps = (state: AppStoreType):MessagesPageType => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        // newMessageText: state.messagesPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        /*onNewMessageChange: (body: string) => {
            dispatch(NewMessageTextAC(body))
        },*/
        onSendMessageClick: (newMessageText:string) => {
            dispatch(SendMessageAC(newMessageText))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)


// export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
// export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
/*const RedirectComponent = (props:DialogsTypeProps) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return <Dialogs {...props}/>
}*/