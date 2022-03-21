import React from "react";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";


export type MessageTypeProps = {
    id: number,
    message: string,
}
export  type UsersTypeProps = {
    id: number,
    name: string,
}

const messages: Array<MessageTypeProps> = [
    {id: 1, message: "Hello, i am Satoshi"},
    {id: 2, message: "Hello, i am Djun"},
    {id: 3, message: "Hello, i am Acira"},
    {id: 4, message: "Hello, i am Kero"},
    {id: 5, message: "Hello, i am Ymy"},
]

const users: Array<UsersTypeProps> = [
    {id: 1, name: "Satoshi"},
    {id: 2, name: "Djun"},
    {id: 3, name: "Acira"},
    {id: 4, name: "Kero"},
    {id: 5, name: "Ymy"},
]


const Dialogs = () => {
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