import React, {FC} from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StoreType} from "./Redux/State";

// components
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Footer} from "./Components/Footer/Footer";


type AppTypeProps = {
    store: StoreType
    /*state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void*/
}
// const App: FC<AppTypeProps> = ({state, addPost, store}) => {
const App: FC<AppTypeProps> = ({store}) => {
    const state = store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={"SOCIAL NETWORK"}/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={"/"}
                               render={() => <Profile posts={state.profilePage.posts}
                                                      addPost={store.addPost.bind(store)}
                                                      newPostText={state.profilePage.newPostText}
                                                      updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
                        <Route path="/Dialogs"
                               render={() => <Dialogs messages={state.messagesPage.messages}
                                                      users={state.messagesPage.users}/>}/>
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
