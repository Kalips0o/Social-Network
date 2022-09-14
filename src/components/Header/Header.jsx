import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Logo from "./../../assets/img/Logo/LogoWhiteBlack.png";

const Header = (props) => {
    return <header className={s.header}>

        <div></div>

        <NavLink to={'/profile'}>
            <img src={Logo}/>
        </NavLink>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div className={s.userInfo}>
                    <span>{props.login}</span>
                    <button onClick={props.logout}>Logout</button>
                </div>
                :
                <NavLink to={"/login"}>Login</NavLink>
            }
        </div>
    </header>
};

export default Header;