import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"


const Profile = (props) => {

    return (
        <div className={s.body}>

            <div>
                <ProfileInfo savePhoto={props.savePhoto}
                             isOwner={props.isOwner}
                             profile={props.profile}
                             status={props.status}
                             saveProfile={props.saveProfile}
                             updateStatus={props.updateStatus}/>
            </div>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;