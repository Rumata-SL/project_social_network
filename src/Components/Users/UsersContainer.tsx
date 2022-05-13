import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {
    FollowAC, SetCurrentPageAC, SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersType,
} from "../../Redux/UsersReducer";
import {Users} from "./Users";
import {UsersApiComponent} from "./UsersApiComponent";


const mapStateToProps = (state: AppStoreType) => {
    return {
        items: state.usersPage["items"],
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)