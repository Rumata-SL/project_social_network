import "./App.css";
import React from "react";
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter
} from "react-router-dom";


// components
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Footer} from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import {Settings} from "./Components/Settings/Settings";
import {LoginContainer} from "./Components/LoginComponent/Login";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {
    HeaderContainer,
    HeaderContainerComponent
} from "./Components/Header/HeaderContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStoreType} from "./Redux/reducers/reduxStore";
import {initializeApp} from "./Redux/reducers/AppReducer";
import {Preloader} from "./Components/Users/Preloaded";

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

        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route exact path="/" render={() => <Redirect to="/profile"/>}/>*/}
                    {/*<Route exact path="/" component={ProfileContainer}/>*/}
                    <Route exact path={"/profile/:userId?"}
                           render={() => <ProfileContainer
                           />}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer
                           />}
                    />
                    <Route path="/users"
                           render={() => <UsersContainer/>}
                    />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(withRouter,connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStoreType>(mapStateToProps, {initializeApp}))(App)
