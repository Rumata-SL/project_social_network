import React from "react";
import s from "./FormsControls.module.css"

export const TextArea = ({input, meta, ...props}: any) => {
    const isError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${isError ? s.error : ""}`}>
            <div><textarea {...input} {...props}></textarea></div>
            {isError && <span className={s.span + " " + s.error}>{meta.error}</span>}
        </div>
    );
};
