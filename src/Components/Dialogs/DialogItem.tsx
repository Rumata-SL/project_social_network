import React, {FC} from "react";
import du from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {state, StateType, UsersType} from "../../Redux/State";


type UsersProps = {
    users: Array<UsersType>
}

 export const DialogItem: FC<UsersProps> = ({users}) => {
    let user = state.messagesPage.users.map(item => {
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
