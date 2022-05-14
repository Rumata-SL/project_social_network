import React from "react";
import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const setActive = (isActive: any) => isActive ? n.active : n.item

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.links}>
                <div><NavLink className={setActive}
                              to="/profile">Profile</NavLink></div>
                <div><NavLink className={setActive}
                              to="/dialogs">Messages</NavLink></div>
                <div><NavLink className={setActive} to="/users">Users</NavLink>
                </div>
                <div><NavLink className={setActive} to="/news">News</NavLink>
                </div>
                <div><NavLink className={setActive} to="/music">Music</NavLink>
                </div>
                <div><NavLink className={setActive}
                              to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    )
}

/*const Navb = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to={'/settings'}
                    activeClassName={s.activeLink}
                >Settings</NavLink>
            </div>
        </nav>
    );
};*/
