import React from 'react';
import s from './Post.module.css'
import userPhoto from "./../../../../assets/img/UserPhoto/user.webp"


function Post  (props) {
    return <div className={s.posts}>
        <div className={s.item}>
            <img src={userPhoto}/>
            {/*<img src={userPhoto}/>*/}
            {props.message}
            <div>
                <span> like </span> {props.likesCount}
            </div>

        </div>

    </div>
}

export default Post;