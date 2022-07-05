import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import {store} from "./Redux/reducers/reduxStore";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './index.css'


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);

