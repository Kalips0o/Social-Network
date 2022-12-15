import React from 'react';
import s from './ProfileData.module.css';


export const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.item}>
        <div className={s.fullName}>
            {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div className={s.contacts}><b>Contacts</b>:
            <li><span>facebook:</span> {profile.contacts.facebook}</li>
            <li><span>github:</span> {profile.contacts.github}</li>
            <li><span>instagram:</span> {profile.contacts.instagram}</li>
            <li><span>twitter:</span> {profile.contacts.twitter}</li>
            <li><span>vk:</span> {profile.contacts.vk}</li>
            <li><span>youtube:</span> {profile.contacts.youtube}</li>
        </div>
        <div> {isOwner &&
            <button className={s.button} onClick={goToEditMode}>edit</button>}
        </div>
    </div>
}

