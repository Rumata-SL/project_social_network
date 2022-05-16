import React, {FC} from "react";
import us from "./Users.module.css";
import photo from "./Icons/avatar.png";
import like from "./Icons/like.png";
import diz from "./Icons/dizlike.png";
import {Pagination} from "@mantine/core";
import {UsersType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import { usersApi} from "../../API/api";

type UsersPresentationPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    items: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}


export let UsersPresentation: FC<UsersPresentationPropsType> = (
    {
        totalUsersCount,
        pageSize,
        items,
        follow,
        unFollow,
        onPageChanged,
        currentPage
    }
) => {
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={us.wrapper}>
        {items.map(u => {
            return <div key={u.id} className={us.container}>
                <div>
                    <div>
                        <NavLink to={"/profile/" + u.id}><img
                            src={u.photos?.small != null ? u.photos.small : photo}
                            alt="photo" className={us.logo}/></NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button className={us.buttonImg}
                                          onClick={() => {
                                              usersApi.setUnFollow(u.id)
                                              unFollow(u.id)
                                          }}
                                >
                                    <img
                                        src={like}
                                        alt="like"
                                        width={"20px"}
                                        className={us.imgButton}
                                    />
                                </button>
                                : <button
                                    className={us.buttonImg}
                                    onClick={() => {
                                        usersApi.setFollow(u.id)
                                        follow(u.id)
                                    }}
                                >
                                    <img
                                        src={diz}
                                        alt="diz"
                                        width={"20px"}
                                        className={us.imgButton}
                                    />
                                </button>
                        }
                    </div>
                </div>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
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
                size="sm"
                onChange={(e) => {
                    onPageChanged(e)
                }}
            />
        </div>
    </div>
}
