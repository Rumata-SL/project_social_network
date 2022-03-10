import React, {FC} from "react";
import dm from "./Dialogs.module.css";

type TypePropsUserMessage = {
    id: number;
    message: string;
}
const UsMessages: Array<TypePropsUserMessage> = [
    {id: 1, message: "Hello, i am Satoshi"},
    {id: 2, message: "Hello, i am Djun"},
    {id: 3, message: "Hello, i am Acira"},
    {id: 4, message: "Hello, i am Kero"},
    {id: 5, message: "Hello, i am Ymy"},
]

const UserMessage: FC<TypePropsUserMessage> = () => {
    const UMessage = UsMessages.map(item => {
        return (
            <div>
                <a key={item.id}> {item.message} </a>
            </div>
        )
    });
    return (
        <div className={dm.item}>
            {UMessage}
        </div>
    )
}
export default UserMessage