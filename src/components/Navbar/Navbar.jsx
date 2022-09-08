import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import MessagesIco from './../../assets/img/Icons/message.png';
import ProfileIco from './../../assets/img/Icons/profile.png';
import NewsIco from './../../assets/img/Icons/news.png';
import MusicIco from './../../assets/img/Icons/music.png';
import SettingIco from './../../assets/img/Icons/setting.png';
import UsersIco from './../../assets/img/Icons/allUsers.png';
import FriendsIco from './../../assets/img/Icons/friends.png';


const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}><img src={ProfileIco}/> Profile </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/Dialogs' activeClassName={s.activeLink}><img src={MessagesIco}/> Messages </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/News' activeClassName={s.activeLink}><img src={NewsIco}/> News </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Music' activeClassName={s.activeLink}> <img src={MusicIco}/> Music </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Setting' activeClassName={s.activeLink}> <img src={SettingIco}/> Setting </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Users' activeClassName={s.activeLink}><img src={UsersIco}/> Users </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Friends' activeClassName={s.activeLink}><img src={FriendsIco}/> Friends </NavLink>
        </div>
    </nav>
}

export default NavBar;