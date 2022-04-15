import React, {FC} from "react";
import dm from "./Dialogs.module.css";


export type MessagePropsType = {
    newMessageText: string
};

export const Message: FC<MessagePropsType> = ({newMessageText}) => {
    return (
        <div className={dm.message}>{newMessageText}</div>
    )
};
