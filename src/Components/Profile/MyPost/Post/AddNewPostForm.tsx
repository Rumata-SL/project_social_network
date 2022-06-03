import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    minLength2,
    required
} from "../../../../utils/validators/validator";
import {TextArea} from "../../../../common/FormControl/FormsControls";

let maxLength10 = maxLengthCreator(10)
export const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={"newPostText"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength10, minLength2]}
                />
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