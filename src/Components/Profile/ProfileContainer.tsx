import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfile,
    getUserStatus,
    ProfileType, updateUserStatus,
} from "../../Redux/ProfileReducer";
import {compose} from "redux";


type PathParamsType = {
    userId: string,
}
type mapStatePropsType = {
    profile: ProfileType | null
    status:string


}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type ProfileContainerPropsType =
    RouteComponentProps<PathParamsType>
    & OwnPropsType

export class ProfileContainerComponent extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "23492";
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStoreType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export const ProfileContainer =  compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}), withRouter, WithAuthRedirect)(ProfileContainerComponent)


// const WithUrlData = withRouter(ProfileContainer)
// export default WithAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlData))
/*type ProfileContainerPropsType = {
    setUsersProfile: (profile: ProfileType) => void
    profile: ProfileType|null

}*/
/*const RedirectComponent = (props:ProfileContainerPropsType) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return <ProfileContainer {...props}/>

}*/