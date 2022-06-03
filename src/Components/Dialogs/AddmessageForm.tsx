import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={"textarea"} name={"newMessageText"}
    placeholder={"Enter your message"}/>
    </div>
    <div>
    <button type={"submit"}>Send</button>
        </div>
        </form>
        </div>
}

export type FormDataType = {
    newMessageText: string
}

export const AddMessageReduxForm = reduxForm<FormDataType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)


