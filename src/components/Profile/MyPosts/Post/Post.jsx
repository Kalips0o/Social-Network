import React from 'react';
import s from './Post.module.css'



function Post  (props) {
    return <div className={s.posts}>
        <div className={s.item}>
            <img src='https://freelance.ru/img/portfolio/pics/00/36/3B/3554271.jpg'/>
            {props.message}
            <div>
                <span> like </span> {props.likesCount}
            </div>

        </div>

    </div>
}

export default Post;