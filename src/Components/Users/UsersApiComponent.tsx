import React from "react";
import {UsersType} from "../../Redux/UsersReducer";
import axios from "axios";
import {UsersPresentation} from "./UsersPresentation";


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


export class UsersApiComponent extends React.Component<UserPropsType> {

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





