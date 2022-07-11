import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reducers/reduxStore";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getUserProfile,
    getUserStatus,
    ProfileType, updateUserStatus,
    savePhoto,
    saveProfile
} from "../../Redux/reducers/ProfileReducer";
import {compose} from "redux";


type PathParamsType = {
    userId: string,
}
type mapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType | null) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type ProfileContainerPropsType =
    RouteComponentProps<PathParamsType>
    & OwnPropsType

export class ProfileContainerComponent extends React.Component<ProfileContainerPropsType> {

    updateProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId?.toString() as string;
            // userId = "23492";
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}

            />
        )
    }
}

const mapStateToProps = (state: AppStoreType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
})

export const ProfileContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile
}), withRouter, WithAuthRedirect)(ProfileContainerComponent)


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