import React from 'react';
import s from './Post.module.css'
import userPhoto from "./../../../../assets/img/UserPhoto/user.webp"


export type PostType = {
    id?: number
    profile?: any
    message: string
    likesCount: number
}

function Post(props: PostType) {
    const photo = props.profile?.photos?.small ? props.profile.photos.small : userPhoto;

    return (
        <div className={s.item}>
            <div className={s.itemImg}>
                {photo && <img src={photo} alt=""/>}
            </div>
            <div className={s.itemText}>
                <div className={s.itemName}>
                    {props.profile?.fullName || 'Samurai'}
                </div>
                <div className={s.itemMessage}>
                    {props.message}
                </div>
            </div>
            <div className={s.itemLike}>
                <span> ♥ {props.likesCount}</span>
            </div>
        </div>
    )
}


export default Post;