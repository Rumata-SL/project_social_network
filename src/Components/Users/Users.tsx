import {v1} from "uuid";
import React, {FC} from "react";
import us from "./Users.module.css"
import foto from "../../Redux/foto.jpg";
import {UsersType} from "../../Redux/UsersReducer";
import axios from "axios";


type UserPropsType = {
    items: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
}

export const Users: FC<UserPropsType> = ({items, follow, unfollow, setUsers}) => {
    let getUsers = () => {
        // if (items.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    setUsers(response.data.items)
                })
        // }
    }

    /*if (!users.length) {
        setUsers([
            {
                id: v1(),
                fotoUrl: foto,
                followed: true,
                fullName: "Sergey",
                status: "I am boss",
                location: {city: "Kurgan", country: "Russia"}
            },
            {
                id: v1(),
                fotoUrl: foto,
                followed: false,
                fullName: "Kirill",
                status: "I am jun",
                location: {city: "Ekb", country: "Russia"}
            },
            {
                id: v1(),
                fotoUrl: foto,
                followed: true,
                fullName: "Egor",
                status: "I am middle",
                location: {city: "Ekb", country: "Russia"}
            },
            {
                id: v1(),
                fotoUrl: foto,
                followed: false,
                fullName: "Efim",
                status: "I am web developer",
                location: {city: "Tumen", country: "Russia"}
            },
        ])
    }*/

    return (
        <div className={us.wrapper}>
            <button onClick={getUsers}>getUsers</button>
            {items.map(u => {
                return <div key={u.id} className={us.container}>
                    <div>
                        <div>
                            <img src={u.photos?.small != null ? u.photos.small : foto} alt="foto" className={us.logo}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        unfollow(u.id)
                                    }}>follow</button>
                                    : <button onClick={() => {
                                        follow(u.id)
                                    }}>unfollow</button>
                            }
                        </div>
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.city}</div>*/}
                        {/*<div>{u.location.country}</div>*/}
                    </span>

                </div>
            })}
        </div>
    );
};
