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
import axios from "axios";
import {UsersPresentation} from "./UsersPresentation";


type UsersApiContainerPropsType = {
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


export class UsersApiContainer extends React.Component<UsersApiContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <UsersPresentation
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            items={this.props.items}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
        />

    }
}



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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)