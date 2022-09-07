import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/206853.png"


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }


    return <div>

        <div>
            <img className={s.userPhotoProfile} src={profile.photos.large || userPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>

        <div className={s.descriptionBlock}>

            <div>
                Имя: {profile.fullName}
            </div>

            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>


            {/*<div>*/}
            {/*    Девиз: {profile.aboutMe}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <div> instagram: {profile.contacts.instagram} </div>*/}
            {/*    <div> vk: {profile.contacts.vk} </div>*/}
            {/*    <div> twitter: {profile.contacts.twitter} </div>*/}
            {/*</div>*/}
        </div>
    </div>

}

export default ProfileInfo;