import "./App.css";
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";


// components
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Settings} from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

const App = () => {
    return (
        // <BrowserRouter>
        <div className="app-wrapper">
            <Header title={"SOCIAL NETWORK"}/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Switch>exact*/}
                <Route path={"/Profile"}
                       render={() => <Profile
                       />}/>

                <Route path="/Dialogs"
                       render={() => <DialogsContainer
                       />}
                />
                <Route path="/Users"
                       render={() => <UsersContainer/>}
                />
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>

                {/*</Switch>*/}
            </div>
            <Footer/>
        </div>
        // </BrowserRouter>
    );
}


export default App;
