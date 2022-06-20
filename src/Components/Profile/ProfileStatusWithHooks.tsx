import React, {ChangeEvent, FC, useEffect, useState} from "react";

type ProfileStatusTypeProps = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<ProfileStatusTypeProps> = (props) => {
    const {status, updateUserStatus} = props

    let [editMode, setEditMode] = useState<boolean>(false)
    let [position, setPosition] = useState<string>(status)

    useEffect(()=>{
        setPosition(status)
    },[status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(position)
    }
    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPosition(e.currentTarget.value)
    }
    return (
        <div>

            {!editMode &&
                <div style={{color: "white", paddingLeft: "15px"}}>
                    status : <span
                    onDoubleClick={activateEditMode}>{status || "No status"}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onChangeStatusHandler}
                           onBlur={deActivateEditMode} value={position}
                           autoFocus></input>
                </div>
            }
        </div>
    )

}

