import React from 'react';
import s from './Message.module.css';
import avatar from './../../../assets/img/UserPhoto/user.webp'

type PropsType = {
    message: string
    name:string
    messageTime:string
}


export const Message:React.FC<PropsType> = (props) => {
    const messageClassName = `${s.message} ${props.name === "Me" ? s.outgoing : s.incoming}`;
    const avatarSrc = props.name === "Me" ? avatar : avatar;

    return (
        <div className={messageClassName}>
            <div className={s.senderInfo}>
                <img className={avatar} src={avatarSrc} alt={props.name + " avatar"}/>
                <p className={s.senderName}>{props.name}</p>
            </div>
            <div className={s.messageContent}>
                <p className={s.message}>{props.message}</p>
                <span className={s.messageTime}>{props.messageTime}</span>
            </div>
        </div>
    );
};


export default Message;