import React, {FC, useState} from "react";

type ProfileStatusTypeProps = {
    status: string
    updateUserStatus: (status: string) => void
}

/*type LocalStateType = {
    editMode: boolean
    status: string
}*/

export const ProfileStatusWithHooks:FC<ProfileStatusTypeProps> = ({status, updateUserStatus})=> {

    let [editMode, setEditMode] = useState(false)


        return (
            <div>
                {!editMode &&
                    <div style={{color: "white", paddingLeft: "15px"}}>
                        status : <span>{status || "No status"}</span>
                    </div>}
                {editMode &&
                    <div>
                        <input value={""} autoFocus></input>
                    </div>
                }
            </div>
        );

}

