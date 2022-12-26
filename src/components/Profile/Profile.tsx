import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ProfileType} from "../../types/types";
import s from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className={s.profile}>


            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>

            <MyPostsContainer profile={undefined} posts={[]} />
        </div>
    )
}


export default Profile;