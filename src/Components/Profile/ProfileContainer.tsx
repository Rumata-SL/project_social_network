import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStoreType} from "../../Redux/reduxStore";
import {ProfileType, setUsersProfile} from "../../Redux/ProfileReducer";


/*type ProfileContainerPropsType = {
    setUsersProfile: (profile: ProfileType) => void
    profile: ProfileType|null

}*/

type PathParamsType = {
    userId: string,
}
type mapStatePropsType = {
    profile: ProfileType|null
}
type mapDispatchPropsType={
    setUsersProfile: (profile: ProfileType) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
                console.log(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStoreType):mapStatePropsType => ({
    profile: state.profilePage.profile
})

const WithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlData)