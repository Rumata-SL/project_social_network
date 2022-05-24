import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile, ProfileType,} from "../../Redux/ProfileReducer";
import {compose} from "redux";


type PathParamsType = {
    userId: string,
}
type mapStatePropsType = {
    profile: ProfileType | null

}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStoreType): mapStatePropsType => ({
    profile: state.profilePage.profile,
})

export const ProfileContainer =  compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, WithAuthRedirect)(ProfileContainerComponent)


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