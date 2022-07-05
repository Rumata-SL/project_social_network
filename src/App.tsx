import "./App.css";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withSuspense} from "./Hoc/WithSuspense";
import {Footer} from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {Preloader} from "./common/preloader/Preloaded";
import {AppStoreType} from "./Redux/reducers/reduxStore";
import {initializeApp} from "./Redux/reducers/AppReducer";
import {HeaderContainer,} from "./Components/Header/HeaderContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
// import {News} from "./Components/News/News";
// import {Music} from "./Components/Music/Music";
// import {Settings} from "./Components/Settings/Settings";
// import {LoginContainer} from "./Components/LoginComponent/Login";
// import {UsersContainer} from "./Components/Users/UsersContainer";
// import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

const LoginPage = React.lazy(
    () => import("./Components/LoginComponent/Login")
        .then(({LoginContainer}) => ({default: LoginContainer})),);
const ProfilePage = React.lazy(() => import("./Components/Profile/ProfileContainer")
    .then(({ProfileContainer}) => ({default: ProfileContainer})),
)
const UserPage = React.lazy(() => import("./Components/Users/UsersContainer")
    .then(({UsersContainer}) => ({default: UsersContainer})),
)
const DialogsPage = React.lazy(() => import("./Components/Dialogs/DialogsContainer")
    .then(({DialogsContainer}) => ({default: DialogsContainer})),
)
const NewsPage = React.lazy(() => import("./Components/News/News")
    .then(({News}) => ({default: News})),
)
const MusicPage = React.lazy(() => import("./Components/Music/Music")
    .then(({Music}) => ({default: Music})),
)
const SettingsPage = React.lazy(() => import("./Components/Settings/Settings")
    .then(({Settings}) => ({default: Settings})),
)

type MapStatePropsType = {
    initialized: boolean,
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route exact path="/" render={() => <Redirect to="/profile"/>}/>*/}
                    <Route exact path="/" component={ProfileContainer}/>
                    <Route exact path={"/profile/:userId?"}
                           render={withSuspense(ProfilePage)}/>
                    <Route path="/dialogs" render={withSuspense(DialogsPage)}/>
                    <Route path="/users" render={withSuspense(UserPage)}/>
                    <Route path="/news" render={withSuspense(NewsPage)}/>
                    <Route path="/music" render={withSuspense(MusicPage)}/>
                    <Route path="/settings" render={withSuspense(SettingsPage)}/>
                    <Route path="/login" render={withSuspense(LoginPage)}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(withRouter, connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStoreType>(mapStateToProps, {initializeApp}))(App)
