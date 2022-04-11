import React, {FC} from "react";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {ActionType, MessagesType, UsersType} from "../../Redux/State";


type DialogsTypeProps = {
    messages: Array<MessagesType>
    users: Array<UsersType>
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const Dialogs: FC<DialogsTypeProps> = ({messages, users, newMessageText, dispatch}) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                <DialogItem users={users}/>
            </div>
            <div className={d.message}>
                <Message dispatch={dispatch} newMessageText={newMessageText} messages={messages}/>
            </div>
        </div>
    )
}