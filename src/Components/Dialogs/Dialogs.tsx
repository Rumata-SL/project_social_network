import React, {ChangeEvent, FC} from "react";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {MessagesType, UsersType} from "../../Redux/Store";


type DialogsTypeProps = {

    newMessageText: string
    users: Array<UsersType>
    messages: Array<MessagesType>
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void

}

export const Dialogs: FC<DialogsTypeProps> = (
    {
        users,
        messages,
        newMessageText,
        onNewMessageChange,
        onSendMessageClick,
    }
) => {

    let dialogsElement = users.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message key={m.id} newMessageText={m.message}/>)
    let newMessageBodyText = newMessageText

    const onNewMessageChangeUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        onNewMessageChange(body)
    }
    const onClickSendMessageClick = () => {
        onSendMessageClick()
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                {dialogsElement}
            </div>
            <div className={d.message}>
                <div>{messagesElement}</div>
                <div>
                    <textarea
                        onChange={onNewMessageChangeUpdate}
                        value={newMessageBodyText}
                        placeholder={"Enter your message"}>
                    </textarea>
                    <div>
                        <button onClick={onClickSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
