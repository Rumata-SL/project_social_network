import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStoreType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {ProfileType, setUsersProfile} from "../../Redux/ProfileReducer";


type ProfileContainerPropsType = {
    setUsersProfile: (profile: ProfileType) => void
    profile: ProfileType

}

export class ProfileApiContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    profile: state.profilePage.profile
})


export const ProfileContainer = connect(mapStateToProps, {setUsersProfile})(ProfileApiContainer)