import React from "react";
import {store} from "./Redux/State";
// import {addPost, state, subscribe, updateNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        // <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById("root")
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);