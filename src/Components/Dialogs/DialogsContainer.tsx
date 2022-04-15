import React, {FC} from "react";
import {Dialogs} from "./Dialogs";
import {StoreType,} from "../../Redux/Store";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";

type DialogsTypeProps = {
    store: StoreType
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