import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStoreType} from "../../Redux/reduxStore";
import {FollowAC, SetYsersAC, UnFollowAC, UserType} from "../../Redux/UsersReducer";

const mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: string) => {
            dispatch(FollowAC(id))
        },
        unfollow: (id: string) => {
            dispatch(UnFollowAC(id))
        },
        setusers: (user: Array<UserType>) => {
            dispatch(SetYsersAC(user))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)