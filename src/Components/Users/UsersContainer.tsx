import React from "react";
import {connect} from "react-redux";
import {Preloader} from "./Preloaded";
import {AppStoreType} from "../../Redux/reduxStore";
import {UsersPresentation} from "./UsersPresentation";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {
    UsersType,
    toggleFollowingProgress,
    getUsersThunkCreator,
    following,
    unfollowing
} from "../../Redux/UsersReducer";


type mapStatePropsType = {
    pageSize: number
    isFetching: boolean
    currentPage: number
    totalUsersCount: number
    items: Array<UsersType>
    followingInProgress: Array<number>
}
type mapDispatchPropsType = {
    following: (userId: number) => void
    unfollowing: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
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
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <UsersPresentation
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                items={this.props.items}
                follow={this.props.following}
                unFollow={this.props.unfollowing}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}


const mapStateToProps = (state: AppStoreType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = WithAuthRedirect(connect(mapStateToProps, {
    following,
    unfollowing,
    getUsersThunkCreator,
    toggleFollowingProgress,
})(UsersApiContainer))


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