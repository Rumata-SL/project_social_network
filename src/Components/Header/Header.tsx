import React, {FC} from "react";
import h from "./Header.module.css";
import logo from "./Header_image/logo.png";

type TypePropsHeader = {
    title: string
}

export const Header: FC<TypePropsHeader> = ({title}) => {
    return (
        <header className={h.header}>
            <div className={h.header_logo}>
                <img className={h.logo} src={logo} alt="logo"/>
            </div>
            <div className={h.header_title}>
                <h2 className={h.hed}>{title}</h2>
            </div>
        </header>
    )
}
