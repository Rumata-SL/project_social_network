import React, {FC} from "react";
import us from "./Users.module.css";
import photo from "./Icons/avatar.png";
import {Pagination} from "@mantine/core";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../Redux/UsersReducer";


type UsersPresentationPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    items: Array<UsersType>
    followingInProgress: Array<number>

    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}


export let UsersPresentation: FC<UsersPresentationPropsType> = (props) => {
 const  {
        items,
        pageSize,
        currentPage,
        totalUsersCount,
        followingInProgress,

        follow,
        unFollow,
        onPageChanged,
        toggleFollowingProgress,
    } = props
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={us.wrapper}>
        {items.map(u => {
            return <div key={u.id} className={us.container}>
                <div className={us.usercontainer}>
                    <div>
                        <NavLink to={"/profile/" + u.id}><img
                            src={u.photos?.small != null ? u.photos.small : photo}
                            alt="photo" className={us.logo}/></NavLink>
                    </div>
                    <span>
                        <div> Name : {u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>
                        {
                            u.followed
                                ? <button className={us.buttonImg}
                                          disabled={followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              unFollow(u.id)
                                          }}>follow
                                </button>
                                : <button
                                    className={us.buttonImg}
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        follow(u.id)
                                    }}>unfollow
                                </button>
                        }
                    </div>
                </div>

            </div>
        })}

        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px"
        }}>
            <Pagination
                initialPage={currentPage}
                total={pagesCount}
                size="md"
                onChange={(e) => {
                    onPageChanged(e)
                }}
            />
        </div>
    </div>
}


/*
toggleFollowingProgress(true, u.id)
usersApi.setUnFollow(u.id).then(() => unFollow(u.id)).then(() => toggleFollowingProgress(true, u.id))*/


/* toggleFollowingProgress(true, u.id)
                                        usersApi.setFollow(u.id).then(() => follow(u.id)).then(() => toggleFollowingProgress(true, u.id))
*/