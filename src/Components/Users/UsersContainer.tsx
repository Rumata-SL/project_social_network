import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType
} from "../../Redux/UsersReducer";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "./Preloaded";
import {usersApi} from "../../API/api";


type UsersApiContainerPropsType = {
    items: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}


export class UsersApiContainer extends React.Component<UsersApiContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersApi.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersPresentation
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                items={this.props.items}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
            />
        </>

    }
}


const mapStateToProps = (state: AppStoreType) => {
    return {
        items: state.usersPage["items"],
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersApiContainer)


/*const mapDispatchToProps = (dispatch: Dispatch) => {
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
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}*/

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)


