import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControl/FormsControls";
import {
    maxLengthCreator,
    minLength2,
    required
} from "../../utils/validators/validator";


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
let maxLength10 = maxLengthCreator(10)
export const LoginForm:FC<InjectedFormProps<FormDataType>> = (props) => {
    const { handleSubmit } = props
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"login"}
                    component={Input}
                    name={"login"}
                    validate={[required, maxLength10, minLength2]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    component={Input}
                    name={"password"}
                    validate={[required, maxLength10, minLength2]}
                />
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