import React from "react";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {MessageTypeProps, UsersTypeProps} from "../../index";


/*export type MessageTypeProps = {
    id: string,
    message: string,
}
export  type UsersTypeProps = {
    id: string,
    name: string,
}

const messages: Array<MessageTypeProps> = [
    {id: v1(), message: "Hello, i am Satoshi"},
    {id: v1(), message: "Hello, i am Djun"},
    {id: v1(), message: "Hello, i am Acira"},
    {id: v1(), message: "Hello, i am Kero"},
    {id: v1(), message: "Hello, i am Ymy"},
]

const users: Array<UsersTypeProps> = [
    {id: v1(), name: "Satoshi"},
    {id: v1(), name: "Djun"},
    {id: v1(), name: "Acira"},
    {id: v1(), name: "Kero"},
    {id: v1(), name: "Ymy"},
]*/

type DialogsTypeProps = {
    messages:Array<MessageTypeProps>
    users:Array<UsersTypeProps>
}

const Dialogs = (props: DialogsTypeProps) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                <DialogItem users={props.users}/>
            </div>
            <div className={d.message}>
                <Message messages={props.messages}/>
            </div>
        </div>
    )
}
export default Dialogs