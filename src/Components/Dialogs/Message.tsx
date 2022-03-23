import React, {FC} from "react";
import dm from "./Dialogs.module.css";
import {MessagesType, state,} from "../../Redux/State";


type TypePropsUserMessage = {
    messages: Array<MessagesType>
}

export const Message: FC<TypePropsUserMessage> = ({messages}) => {
    const message = state.messagesPage.messages.map(item => {
        return (
            <div key={item.id}>
                 <div>
                {item.message}
                 </div>
            </div>
        )
    });
    return (
        <div className={dm.item}>
            {message}
        </div>
    )
}
