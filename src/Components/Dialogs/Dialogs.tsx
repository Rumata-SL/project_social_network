import {Message} from "./Message";
import d from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem";
import React, {ChangeEvent, FC} from "react";
import {MessagesType, UsersType} from "../../Redux/MessageReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsTypeProps = {
    users: Array<UsersType>
    messages: Array<MessagesType>
    onSendMessageClick: (newMessageText: string) => void
    // newMessageText: string
    // onNewMessageChange: (body: string) => void
}

export const Dialogs: FC<DialogsTypeProps> = (
    {
        users,
        messages,
        onSendMessageClick,
        // newMessageText,
        // onNewMessageChange,
    }
) => {

    let dialogsElement = users.map(d =>
        <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m =>
        <Message key={m.id} newMessageText={m.message}/>)

    const Submit = (values: FormDataType) => {
        onSendMessageClick(values.newMessageText)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                {dialogsElement}

            </div>
            <div className={d.message}>
                <div>{messagesElement}</div>
                <AddMessageReduxForm onSubmit={Submit}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageText: string
}

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

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)


/* let newMessageBodyText = newMessageText

    const onNewMessageChangeUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        onNewMessageChange(body)
    }
    const onClickSendMessageClick = () => {
        onSendMessageClick()
    }*/