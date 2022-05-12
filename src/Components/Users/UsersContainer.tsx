import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {
    FollowAC,
    SetUsersAC,
    UnFollowAC,
    UsersType,
} from "../../Redux/UsersReducer";
import {Users} from "./Users";
import {UsersC} from "./UsersC";


const mapStateToProps = (state: AppStoreType) => {
    return {
        items: state.usersPage["items"]
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (items: Array<UsersType>) => {
            dispatch(SetUsersAC(items))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)