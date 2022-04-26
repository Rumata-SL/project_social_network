import React, {FC} from "react";
import {UserType} from "../../Redux/UsersReducer";
import us from "./Users.module.css"


type UserPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    // setusers: () => void
}

export const Users: FC<UserPropsType> = ({users, follow, unfollow}) => {

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
                                        // follow(u.id)
                                        unfollow(u.id)

                                    }}>follow</button>
                                    : <button onClick={() => {
                                        // unfollow(u.id)
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
