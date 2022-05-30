import React from "react";
import {Field, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmit = (formData:any)=>{
        console.log(formData)
    }
    return (
        <div style={{color: "#FFF", textAlign: "center"}}>
            <h4 style={{fontSize:'1.5em'}}>LOGIN</h4>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export const LoginForm = (props: any) => {
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

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)