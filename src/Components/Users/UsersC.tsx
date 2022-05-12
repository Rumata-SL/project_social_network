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



export class UsersC extends React.Component<UserPropsType>{
    constructor(props:UserPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render(){
        return <div className={us.wrapper}>
            {/*<button onClick={this.getUsers}>getUsers</button>*/}
            {this.props.items.map(u => {
                return <div key={u.id} className={us.container}>
                    <div>
                        <div>
                            <img src={u.photos?.small != null ? u.photos.small : foto} alt="foto" className={us.logo}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>follow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}



}





