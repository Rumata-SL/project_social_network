import React from "react";
import d from "./Dialogs.module.css"
import DialogUser from "./DialogUser";
import UserMessage from "./UserMessage";


const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialog}>
                <DialogUser/>
            </div>
            <div className={d.message}>
                <UserMessage/>
            </div>
        </div>
    )
}
export default Dialogs