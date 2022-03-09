import React from "react";
import logo from "./Header_image/logo.png";
import h from "./Header.module.css";


function Header (){
    return (
        <header className={h.header}>
            <div className={h.header_logo}>
                <img className={h.logo} src={logo} alt="logo"/>
            </div>
            <div className={h.header_title}><h2>SOCIAL NETWORK </h2></div>
        </header>
    )
}
export default Header