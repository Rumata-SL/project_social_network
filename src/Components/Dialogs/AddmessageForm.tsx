import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormControl/FormsControls";
import {
    maxLengthCreator,
    minLength2,
    required
} from "../../utils/validators/validator";


let maxLength50 = maxLengthCreator(50)
export const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={"newMessageText"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength50, minLength2]}
                />
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


