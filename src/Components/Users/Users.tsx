import {v1} from "uuid";
import React, {FC} from "react";
import us from "./Users.module.css"
import foto from "../../Redux/foto.jpg";
import {UserType} from "../../Redux/UsersReducer";


type UserPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void
}

export const Users: FC<UserPropsType> = ({users, follow, unfollow, setUsers}) => {

    if (!users.length) {
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
    }

    return (
        <div className={us.wrapper}>
            {users.map(u => {
                return <div key={u.id} className={us.container}>
                    <div>
                        <div>
                            <img src={u.fotoUrl} alt="foto" className={us.logo}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>

                </div>
            })}
        </div>
    );
};
