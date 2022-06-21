import React, {FC} from "react";
import {Message} from "./Message";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {MessagesType, UsersType} from "../../Redux/MessageReducer";

import {
    AddMessageReduxForm,
    FormDataType
} from "./AddmessageForm";


export type DialogsTypeProps = {
    users: Array<UsersType>
    messages: Array<MessagesType>

    onSendMessageClick: (newMessageText: string) => void
}

export const Dialogs: FC<DialogsTypeProps> = (
    {
        users,
        messages,
        onSendMessageClick,
    }
) => {

    let dialogsElement = users.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m =>
        <Message key={m.id} newMessageText={m.message}/>)

    const Submit = (values: FormDataType) => {
        onSendMessageClick(values.newMessageText)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                {dialogsElement}

            </div>
            <div className={d.message}>
                <div>{messagesElement}</div>
                <AddMessageReduxForm onSubmit={Submit}/>
            </div>
        </div>
    )
}
