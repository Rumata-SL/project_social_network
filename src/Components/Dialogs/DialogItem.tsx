import React, {FC} from "react";
import du from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItem = {
    id: string
    name: string
};

export const DialogItem: FC<DialogItem> = ({name, id}) => {
    return (
        // <div className={du.dialog}><NavLink className={du.dialog} to={`/dialogs/${id}`}>{name}</NavLink></div>
        <NavLink className={du.dialog} to={`/dialogs/${id}*`}>{name}</NavLink>
    )
};
