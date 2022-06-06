import React from "react";
import s from "./FormsControls.module.css"

export const TextArea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
};
export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
};

const FormControl = ({input, meta, child, ...props}: any) => {
    const isError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${isError ? s.error : ""}`}>
            <div>{props.children}</div>
            {isError &&
                <span className={s.span + " " + s.error}>{meta.error}</span>}
        </div>
    );
};