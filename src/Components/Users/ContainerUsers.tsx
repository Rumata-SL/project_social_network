import React from "react";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from "../../Redux/UsersReducer";


const mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.usersPage["users"]
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (user: Array<UserType>) => {
            dispatch(SetUsersAC(user))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)