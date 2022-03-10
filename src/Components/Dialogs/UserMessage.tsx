import React, {FC} from "react";
import dm from "./Dialogs.module.css";
import {MessageTypeProps} from "./Dialogs";

type TypePropsUserMessage = {
    messages: Array<MessageTypeProps>
}


const UserMessage: FC<TypePropsUserMessage> = (props: TypePropsUserMessage) => {
    const message = props.messages.map(item => {
        return (
            <div>
                <a key={item.id}> {item.message} </a>
            </div>
        )
    });
    return (
        <div className={dm.item}>
            {message}
        </div>
    )
}
export default UserMessage