import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./Redux/Store";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById("root")
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);