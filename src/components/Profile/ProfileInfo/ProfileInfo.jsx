import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div>


        <div className={s.descriptionBlock}>
            <div>
                Имя: {profile.fullName}
            </div>
            <div>
                <img src={profile.photos.large}/>
            </div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>


            <div>
                Девиз: {profile.aboutMe}
            </div>
            <div>
                <div> instagram: {profile.contacts.instagram} </div>
                <div> vk: {profile.contacts.vk} </div>
                <div> twitter: {profile.contacts.twitter} </div>

            </div>
        </div>
    </div>

}

export default ProfileInfo;