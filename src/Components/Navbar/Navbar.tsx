import React from "react";
import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const setActive = (navData: any) => navData.isActive ? n.active : n.item

function Navbar() {
    return (
        <nav className={n.nav}>
            <div className={n.links}>
                <div><NavLink className={setActive} to="/">Profile</NavLink></div>
                <div><NavLink className={setActive} to="/Dialogs">Messages</NavLink></div>
                <div><NavLink className={setActive} to="/News">News</NavLink></div>
                <div><NavLink className={setActive} to="/Music">Music</NavLink></div>
                <div><NavLink className={setActive} to="/Settings">Settings</NavLink></div>
            </div>
        </nav>
    )
}

export default Navbar