import React, {FC} from "react";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {MessagesType, UsersType} from "../../Redux/State";


type DialogsTypeProps = {
    messages: Array<MessagesType>
    users: Array<UsersType>
}

const Dialogs:FC<DialogsTypeProps> = ({messages, users}) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                <DialogItem users={users}/>
            </div>
            <div className={d.message}>
                <Message messages={messages}/>
            </div>
        </div>
    )
}
export default Dialogs