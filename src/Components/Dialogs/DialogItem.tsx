import React, {FC} from "react";
import du from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItem = {
    id: string
    name: string
};

export const DialogItem: FC<DialogItem> = ({name, id}) => {
    return (
        <NavLink className={du.dialog} to={`/dialogs/${id}*`}>{name}</NavLink>
    )
};
