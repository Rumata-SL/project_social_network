import React, {FC} from "react";
import du from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {UsersTypeProps} from "./Dialogs";

type UsersProps = {
    users: Array<UsersTypeProps>
}

const DialogUser: FC<UsersProps> = (props: UsersProps) => {
    let user = props.users.map(item => {
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

export default DialogUser