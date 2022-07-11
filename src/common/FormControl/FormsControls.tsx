import React, {FC} from "react";
import s from "./FormsControls.module.css"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}


export const TextArea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl meta={meta}><textarea {...input} {...restProps}></textarea></FormControl>
    )
};
export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl
            meta={meta}><input {...input} {...restProps} ></input></FormControl>
    )
};

const FormControl: FC<FormControlPropsType> = ({
                                                   meta: {touched, error},
                                                   children
                                               }) => {
    const isError = touched && error
    return (
        <div className={`${s.formControl} ${isError ? s.error : ""}`}>
            <div>{children}</div>
            {isError &&
                <span className={s.span + " " + s.error}>{error}</span>}
        </div>
    );
};

export const createField = (placeholder: string | null, name: string, validators: ((value: string) => string | undefined)[], component: React.FC<WrappedFieldProps>, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)