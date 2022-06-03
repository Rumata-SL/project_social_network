import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"}
                       placeholder={"Enter your message"}/>
            </div>
            <div>
                <button type={"submit"}>Send</button>
            </div>
        </form>
    </div>
}

export type FormDataType = {
    newPostText: string
}

export const AddPostReduxForm = reduxForm<FormDataType>({
    form: "addPostForm"
})(AddNewPostForm)