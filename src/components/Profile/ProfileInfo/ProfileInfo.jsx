import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img
                src='https://londonoktober.github.io/UdacityPortfolioSite/images/1200x400.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <div>
                Имя: {props.profile.fullName}
            </div>
            <img src={props.profile.photos.large}/>
            <div>
                Девиз: {props.profile.aboutMe}
            </div>
            <div>
                <div> instagram: {props.profile.contacts.instagram} </div>
                <div> vk: {props.profile.contacts.vk} </div>
                <div> twitter: {props.profile.contacts.twitter} </div>
            </div>
        </div>
    </div>

}

export default ProfileInfo;