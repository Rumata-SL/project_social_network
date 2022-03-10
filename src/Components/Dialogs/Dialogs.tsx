import React from "react";
import d from "./Dialogs.module.css"
import DialogUser from "./DialogUser";
import UserMessage from "./UserMessage";


export type TypePropsMessage={
    id: number
    message: string
}
export  type UsersTypeProps={
    id: number
    name: string
}

const messages: Array<TypePropsMessage> = [
    {id: 1, message: "Hello, i am Satoshi"},
    {id: 2, message: "Hello, i am Djun"},
    {id: 3, message: "Hello, i am Acira"},
    {id: 4, message: "Hello, i am Kero"},
    {id: 5, message: "Hello, i am Ymy"},
]

const users: Array<UsersTypeProps> = [
    {id:1, name: "Satoshi"},
    {id:2, name: "Djun"},
    {id:3, name: "Acira"},
    {id:4, name: "Kero"},
    {id:5, name: "Ymy"},
]


const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                <DialogUser users={users}/>
            </div>
            <div className={d.message}>
                <UserMessage messages={messages}/>
            </div>
        </div>
    )
}
export default Dialogs