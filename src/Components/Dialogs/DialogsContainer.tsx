import React from "react";
import {Dialogs} from "./Dialogs";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";
import {Store} from "redux";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {MessagesPageType, StateType} from "../../Redux/Store";


/*type DialogsTypeProps = {
    store: AppStoreType
}*/
/*export const DialogsContainer: FC<DialogsTypeProps> = ({store}) => {

    let state = store.getState()

    const onNewMessageChange = (body: string) => {
        store.dispatch(NewMessageTextAC(body))
    }

    const onSendMessageClick = () => {
        store.dispatch(SendMessageAC())
    }
    return (
        <div>
            <Dialogs
                users={state.messagesPage.users}
                messages={state.messagesPage.messages}
                onNewMessageChange={onNewMessageChange}
                onSendMessageClick={onSendMessageClick}
                newMessageText={state.messagesPage.newMessageText}
            />
        </div>
    )
}*/


const mapStateToProps = (state: StateType) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: any) => {
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