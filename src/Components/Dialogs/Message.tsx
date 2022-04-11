import React, {ChangeEvent, FC} from "react";
import dm from "./Dialogs.module.css";
import {ActionType, MessagesType} from "../../Redux/State";
import {NewMessageTextAC, SendMessageAC} from "../../Redux/MessageReducer";


type TypePropsUserMessage = {
    messages: Array<MessagesType>
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const Message: FC<TypePropsUserMessage> = ({messages, newMessageText, dispatch}) => {
    const message = messages.map(item => {
        return (
            <div key={item.id}>
                <div>
                    {item.message}
                </div>
            </div>
        )
    });

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        console.log(body)
        dispatch(NewMessageTextAC(body))
    }
    const onSendMessageClick = () => {
        dispatch(SendMessageAC())
    }
    return (
        <div className={dm.item}>
            <div>{message}</div>
            <div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageText}
                        placeholder={"Enter your message"}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}
