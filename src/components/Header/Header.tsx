import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import Logo from "./../../assets/img/Logo/LogoWhiteBlack.png";
import defaultAvatar from "./../../assets/img/UserPhoto/user.webp"

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}


const Header: React.FC<MapPropsType & DispatchPropsType> = (props, state) => {

    const photo = state.profile?.photos?.small ? state.profile.photos.small : defaultAvatar;

    console.log(props)
    return <header className={s.header}>
        <NavLink to={'/profile'}>
            <img className={s.logo} src={Logo}/>
        </NavLink>
        <div className={s.loginBlock} >
            {props.isAuth ?
                <div className={s.loggedUser}>

                    <div className={s.avatar}>
                        <img className={s.avatar} src={photo}  />
                    </div>


                    <span className={s.name}>{props.login}</span>

                    <button  onClick={props.logout}> logout </button>
                </div>
                :
                <NavLink to={"/login"}>Login</NavLink>
            }
        </div>
    </header>
};

export default Header;