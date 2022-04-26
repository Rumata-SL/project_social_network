import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStoreType} from "../../Redux/reduxStore";
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from "../../Redux/UsersReducer";

const mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.usersPage["users"]
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setusers: (user: Array<UserType>) => {
            dispatch(SetUsersAC(user))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)