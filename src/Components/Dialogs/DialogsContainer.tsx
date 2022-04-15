import React, {FC} from "react";
import {Dialogs} from "./Dialogs";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";
import {Store} from "redux";


type DialogsTypeProps = {
    store: Store
}
export const DialogsContainer: FC<DialogsTypeProps> = ({store}) => {

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
}