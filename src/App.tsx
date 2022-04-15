import "./App.css";
import React, {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// components
import {Store} from "redux";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Settings} from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


type AppTypeProps = {
    store: Store
}
const App: FC<AppTypeProps> = ({store}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={"SOCIAL NETWORK"}/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={"/"}
                               render={() => <Profile
                                   store={store}
                               />}/>
                        <Route path="/Dialogs"
                               render={() => <DialogsContainer store={store}/>}
                        />
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
