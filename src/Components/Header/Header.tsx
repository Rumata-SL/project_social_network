import React, {FC} from "react";
import logo from "./Header_image/logo.png";
import h from "./Header.module.css";

type TypePropsHeader = {
    title:string
}

const Header: FC<TypePropsHeader> = (props) => {
    return (
        <header className={h.header}>
            <div className={h.header_logo}>
                <img className={h.logo} src={logo} alt="logo"/>
            </div>
            <div className={h.header_title}>
                <h2>{props.title}</h2>
            </div>
        </header>
    )
}
export default Header