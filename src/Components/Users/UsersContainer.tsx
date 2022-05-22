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
    UsersType,
    toggleFollowingProgress,
    getUsersThunkCreator,
    following,
    unfollowing
} from "../../Redux/UsersReducer";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "./Preloaded";
import {usersApi} from "../../API/api";
import {ProfileType} from "../../Redux/ProfileReducer";


type mapStatePropsType = {
    items: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchPropsType = {
    // follow: (userId: number) => void
    // unFollow: (userId: number) => void
    following: (userId: number) => void
    unfollowing: (userId: number) => void
    // setUsers: (user: Array<UsersType>) => void
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalUsersCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress:(isFetching: boolean, id: number)=>void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


type UsersApiContainerPropsType = mapStatePropsType & mapDispatchPropsType

export class UsersApiContainer extends React.Component<UsersApiContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {/*{this.props.isFetching ? <Preloader/> :null}*/}
            {this.props.isFetching
                ? <Preloader/>
                : <UsersPresentation
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    items={this.props.items}
                    follow={this.props.following}
                    unFollow={this.props.unfollowing}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />}

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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    // follow,
    // unFollow,
    // setUsers,
    // setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    following,
    unfollowing,
    getUsersThunkCreator,
    toggleFollowingProgress,
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

/*type UsersApiContainerPropsType = {
    items: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching: boolean, id: number)=>void
    getUsersThunkCreator:(currentPage: number, pageSize: number)=>void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}*/
/*this.props.toggleIsFetching(true)

        usersApi.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

            })*/