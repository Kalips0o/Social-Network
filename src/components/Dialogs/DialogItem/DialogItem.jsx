import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "./../../../assets/img/UserPhoto/user.webp";


export const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={Avatar} alt={props.name + "'s Avatar"}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}
export default DialogItem