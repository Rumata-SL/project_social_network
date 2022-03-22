import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// components
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import {AppTypeProps} from "./index";




function App(props:AppTypeProps) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={"SOCIAL NETWORK"}/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={"/"} render={() => <Profile posts={props.posts}/>}/>
                        <Route path="/Dialogs" render={() => <Dialogs users={props.users} messages={props.messages}/>}/>
                        <Route path="/News" render={() => <News/>}/>
                        <Route path="/Music" render={() => <Music/>}/>
                        <Route path="/Settings" render={() => <Settings/>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}



export default App;
