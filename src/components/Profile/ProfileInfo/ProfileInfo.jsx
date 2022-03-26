import React from 'react';
import s from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://londonoktober.github.io/UdacityPortfolioSite/images/1200x400.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>
    </div>

}

export default ProfileInfo;