import React, {FC} from "react";
import dm from "./Dialogs.module.css";
import {MessageTypeProps} from "../../index";


type TypePropsUserMessage = {
    messages: Array<MessageTypeProps>
}

export const Message: FC<TypePropsUserMessage> = ({messages}) => {
    const message = messages.map(item => {
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
