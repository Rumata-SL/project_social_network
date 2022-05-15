import React, {FC} from "react";
import h from "./Header.module.css";
import logo from "./Header_image/logo.png";
import {NavLink} from "react-router-dom";

type TypePropsHeader = {
    isAuth: boolean
    login: string | null
}

export const Header: FC<TypePropsHeader> = ({isAuth, login}) => {
    return (
        <header className={h.header}>
            <div className={h.header_logo}>
                <img className={h.logo} src={logo} alt="logo"/>
            </div>
            <div className={h.header_title}>
                <h2 className={h.hed}>SOCIAL NETWORK</h2>
            </div>
            <div className={h.login_block}>
                {isAuth ? login : <NavLink to={"/login"}
                                           className={h.login_title}>LOGIN</NavLink>}
            </div>
        </header>
    )
}
