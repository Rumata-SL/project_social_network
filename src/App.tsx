import "./App.css";
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";


// components
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Footer} from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import {Settings} from "./Components/Settings/Settings";
import WithUrlData from "./Components/Profile/ProfileContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Login} from "./Components/LoginComponent/Login";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route exact path="/" render={() => <Redirect to="/profile"/>}/>*/}
                <Route exact path="/" component={WithUrlData}/>
                <Route exact path={"/profile/:userId?"}
                       render={() => <WithUrlData
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
                <Route path="/login" render={() => <Login/>}/>
            </div>
            <Footer/>
        </div>

    );
}

export default App;
