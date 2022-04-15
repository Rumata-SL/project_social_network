import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import {store} from "./Redux/reduxStore";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById("root")
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);