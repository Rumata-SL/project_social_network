import {v1} from "uuid";
import React, {FC} from "react";
import us from "./Users.module.css"
import foto from "../../Redux/foto.jpg";
import {UsersType} from "../../Redux/UsersReducer";
import axios from "axios";
import like from "./Icons/like.png"
import diz from "./Icons/dizlike.png"
import {Pagination} from "@mantine/core";


type UserPropsType = {
    items: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

    totalUsersCount: number
    pageSize: number
    currentPage: number
}


export class UsersC extends React.Component<UserPropsType> {
    /*constructor(props:UserPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNamber: number) => {
        this.props.setCurrentPage(pageNamber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: Array<number> = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)

        }

        return <div className={us.wrapper}>
            {/*<div className={us.pagination}>
                {pages.map(p=>{
                return <><span
                    className={this.props.currentPage === p ? us.selected : us.noselected}
                    onClick={() => {
                        this.onPageChanged(p)
                    }}>
                    {p}
                </span>,</>
                })}
            </div>*/}
            {/*<button onClick={this.getUsers}>getUsers</button>*/}
            {this.props.items.map(u => {
                return <div key={u.id} className={us.container}>
                    <div>
                        <div>
                            <img
                                src={u.photos?.small != null ? u.photos.small : foto}
                                alt="foto" className={us.logo}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button className={us.buttonImg} onClick={() => {
                                        this.props.unfollow(u.id)
                                        // }}>follow</button>
                                    }}><img src={like} alt="like" width={"20px"} className={us.imgButton}/>
                                    </button>
                                    : <button className={us.buttonImg} onClick={() => {
                                        this.props.follow(u.id)
                                    }}><img src={diz} alt="diz" width={"20px"} className={us.imgButton}/>
                                    </button>
                                // }}>unfollow</button>
                            }
                        </div>
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.uniqueUrlName}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                        {/*<div>{"u.location.country"}</div>*/}
                    </span>

                </div>
            })}
            {/*<div >
                <div className={us.pagination}>
                    {pages.map(p => {
                        return <span
                            className={this.props.currentPage === p ? us.selected : us.noselected}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}>
                    {p}
                </span>
                    })}
                </div>
            </div>*/}
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px"
            }}><Pagination
                total={pagesCount}
                size="sm"
                onChange={(e) => {
                    this.onPageChanged(e)
                }}/></div>
        </div>
    }


}





