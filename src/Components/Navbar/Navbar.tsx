import React from "react";
import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const setActive = (isActive: boolean) => isActive ? n.active : n.item

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.links}>
                <div><NavLink className={setActive} to="/profile">Profile</NavLink></div>
                <div><NavLink className={setActive} to="/dialogs">Messages</NavLink></div>
                <div><NavLink className={setActive} to="/users">Users</NavLink></div>
                <div><NavLink className={setActive} to="/news">News</NavLink></div>
                <div><NavLink className={setActive} to="/music">Music</NavLink></div>
                <div><NavLink className={setActive} to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    )
}
