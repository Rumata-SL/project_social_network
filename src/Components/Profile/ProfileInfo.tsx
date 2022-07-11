import React, {FC, useState} from "react";
import ava from "./Profile_image/ava.png"
import up from "./MyPost/MyPost.module.css";
import {Preloader} from "../../common/preloader/Preloaded";
import {ContactsType, ProfileType,} from "../../Redux/reducers/ProfileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ProfileFormData from "./profileFormData/ProfileFormData";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean

    updateUserStatus: (status: string) => void
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType | null) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
    const {
        profile,
        status,
        isOwner,
        updateUserStatus,
        savePhoto,
        saveProfile
    } = props

    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: { target: any }) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfileType | null) => {
        saveProfile(formData)
            // @ts-ignore
            .then(() => {
                setEditMode(false)
            })
    }
    return (
        <div>
            {/*<hr/>*/}
            <br/>
            <div className={up.container_content_social_logo}>
                <div className={up.box1}>
                    <img
                        src={profile.photos.small !== null ? profile.photos.small : ava}
                        alt="image" width={100}/>
                    {isOwner && <div><input type={"file"}
                                            onChange={onMainPhotoSelected}/>
                    </div>}
                    <br/>
                    <ProfileStatusWithHooks status={status}
                                            updateUserStatus={updateUserStatus}/>
                    {editMode
                        ? <ProfileFormData initialValues={profile}
                                           onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}
                </div>
            </div>
            <hr/>
        </div>
    );
};

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: FC<ProfileDataType> = (props) => {
    const {profile, isOwner, goToEditMode} = props
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}

            <div>Name: <span className={up.name}>{profile.fullName}</span></div>

            <div>Looking For A Job: <span
                className={up.name}>{profile.lookingForAJob ? "yes" : "no"}</span>
                {profile.lookingForAJob &&
                    <div>
                        <b>My professional
                            skills: </b> {profile.lookingForAJobDescription}
                    </div>}
            </div>

            <div>AboutMe: {profile.aboutMe}</div>

            <div className={up.contact}>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>

        </div>

    )
}

type ContactType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div>{contactTitle}: {contactValue}</div>
    )
}
