import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControl/FormsControls";
import {
    maxLengthCreator,
    minLength2,
    required
} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/AuthReducer";
import {AppStoreType} from "../../Redux/reduxStore";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login: FC<LoginPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        loginTC(formData.email, formData.password, formData.rememberMe)

    }
    /*if(isAuth){
        return <Redirect to={"/profile"}/>
    }*/
    return (
        < >
            {isAuth ? <Redirect to={"/profile"}/> :
                <LoginReduxForm onSubmit={onSubmit}/>}
        </>
    );
};

type LoginPropsType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStoreType) => ({isAuth: state.auth.isAuth})

export const LoginContainer = connect(mapStateToProps, {loginTC})(Login)


let maxLength20 = maxLengthCreator(20)

export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return <div className={s.wrapper}>
        <div><h4 className={s.wrapperHeader}>LOGIN</h4>
        </div>
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.containerForm}>
                <div>
                    <span>login</span>
                    <Field
                        placeholder={"Email"}
                        component={Input}
                        name={"email"}
                        validate={[required, maxLength20, minLength2]}
                    />
                </div>
                <div>
                    <span>password</span>
                    <Field
                        placeholder={"Password"}
                        type={"password"}
                        component={Input}
                        name={"password"}
                        validate={[required, maxLength20, minLength2]}
                    />
                </div>
                <div>
                    <Field component={"input"} type="checkbox"
                           name={"rememberMe"} placeholder={"rememberMe"}/>remember
                    me
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: "login"
})(LoginForm)