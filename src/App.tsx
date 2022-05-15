import "./App.css";
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";


// components
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Settings} from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import WithUrlData, {ProfileContainer} from "./Components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header title={"SOCIAL NETWORK"}/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route exact path="/" render={() => <Redirect to="/profile"/>}/>*/}
                {/*<Route exact path="/" component={ProfileContainer}/>*/}
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
            </div>
            <Footer/>
        </div>

    );
}


export default App;
