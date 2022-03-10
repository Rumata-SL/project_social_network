import React, {FC} from "react";
import du from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type UsersProps = {
    id: number;
    name: string;
}
const DUsers: Array<UsersProps> = [
    {id:1, name: "Satoshi"},
    {id:2, name: "Djun"},
    {id:3, name: "Acira"},
    {id:4, name: "Kero"},
    {id:5, name: "Ymy"},
]

const DialogUser: FC<UsersProps> = (props) => {
    let DUser = DUsers.map(item => {
        return (
            <div key={item.id}>
                <NavLink to={`${item.id}`}>{item.name}</NavLink>
            </div>
        )
    });

    return (
        <div className={du.item}>
            {DUser}
        </div>
    )
}

export default DialogUser