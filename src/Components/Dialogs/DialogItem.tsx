import React, {FC} from "react";
import du from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {UsersTypeProps} from "./Dialogs";

type UsersProps = {
    users: Array<UsersTypeProps>
}

 export const DialogItem: FC<UsersProps> = ({users}) => {
    let user = users.map(item => {
        return (
            <div key={item.id}>
                <NavLink to={`${item.id}`}>{item.name}</NavLink>
            </div>
        )
    });

    return (
        <div className={du.item}>
            {user}
        </div>
    )
}
