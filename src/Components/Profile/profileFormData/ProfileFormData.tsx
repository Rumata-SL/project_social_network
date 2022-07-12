import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../Redux/reducers/ProfileReducer";
import up from "../MyPost/MyPost.module.css";
import {
    createField,
    Input,
    TextArea
} from "../../../common/FormControl/FormsControls";
import s from "../../LoginComponent/Login.module.css";


const ProfileFormData = (props: InjectedFormProps<ProfileType>) => {
    const {handleSubmit, initialValues, error} = props
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
                {error && <div className={s.formerror}>{error}</div>}
            </div>
            <div>Name: <span
                className={up.name}>{createField("Full name", "fullName", [], Input)}</span>
            </div>
            <div>AboutMe: {createField("About me", "aboutMe", [], TextArea)}</div>
            <div>Looking For A
                Job: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
            <div className={up.contact}>
                <b>Contacts: </b> {Object.keys(initialValues.contacts ?? {}).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    );
};
const ProfileDataFormReduxForm = reduxForm<ProfileType>({form: "edit-profile"})(ProfileFormData)

export default ProfileDataFormReduxForm;