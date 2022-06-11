import {AppStoreType} from "./reduxStore";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStoreType) => {
    return state.usersPage.items
}
export const getUsers = createSelector(getUsersSelector, (items) => {
    return items.filter(i => true)
})

export const getPageSize = (state: AppStoreType) => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state: AppStoreType) => {
    return state.usersPage.isFetching
}
export const getCurrentPage = (state: AppStoreType) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: AppStoreType) => {
    return state.usersPage.totalUsersCount
}
export const getFollowingInProgress = (state: AppStoreType) => {
    return state.usersPage.followingInProgress
}

