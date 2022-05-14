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
import {ProfileContainer} from "./Components/Profile/ProfileContainer";

const App = () => {
    return (
        // <BrowserRouter>
        <div className="app-wrapper">
            <Header title={"SOCIAL NETWORK"}/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Switch>
                    {/*exact*/}
                    <Route exact path={"/profile"}
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

                </Switch>
            </div>
            <Footer/>
        </div>
        // </BrowserRouter>
    );
}


export default App;
