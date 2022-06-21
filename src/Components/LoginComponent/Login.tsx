import React, {FC} from "react";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../Redux/reducers/AuthReducer";
import {AppStoreType} from "../../Redux/reducers/reduxStore";
import {Input} from "../../common/FormControl/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLength2,
    required
} from "../../utils/validators/validator";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login: FC<LoginPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe)

    }

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
    const {handleSubmit, error} = props
    return <div className={s.wrapper}>
        <div><h4 className={s.wrapperHeader}>LOGIN</h4>
        </div>
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.containerForm}>
                <div className={s.containerFormInput}>
                    <span>login</span>
                    <Field className={s.field}
                           component={Input}
                           placeholder={"Email"}
                           name={"email"}
                           validate={[required, maxLength20, minLength2]}
                    />
                </div>
                <div className={s.containerFormInput}>
                    <span>password</span>
                    <Field
                           className={s.field}
                           component={Input}
                           placeholder={"Password"}
                           name={"password"}
                           type={"password"}
                           validate={[required, maxLength20, minLength2]}
                    />
                </div>
                <div>
                    <Field component={"input"}
                           placeholder={"rememberMe"}
                           name={"rememberMe"}
                           type="checkbox"
                    />remember me
                </div>
                {/*{props.error && <div className={s.error}><span>{props.error}</span></div>}*/}
                {error ?
                    <div className={s.formerror}>{error}</div>
                    : <div className={s.noError}>no error</div>}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)