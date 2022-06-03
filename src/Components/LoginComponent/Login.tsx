import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
    }
    return (
        <div style={{color: "#FFF", textAlign: "center"}}>
            <h4 style={{fontSize:'1.5em'}}>LOGIN</h4>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export const LoginForm:FC<InjectedFormProps<FormDataType>> = (props) => {
    const { handleSubmit } = props
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"login"} component={"input"} name={"login"}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"password"}/>
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"remember me"}/>remember me
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)