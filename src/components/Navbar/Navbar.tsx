import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import MessagesIco from './../../assets/img/links/message.png';
import ChatIco from './../../assets/img/links/chat.png';
import ProfileIco from './../../assets/img/links/profile.png';
import NewsIco from './../../assets/img/Icons/news.png';
import MusicIco from './../../assets/img/links/music.png';
import SettingIco from './../../assets/img/Icons/setting.png';
import UsersIco from './../../assets/img/links/users.png';


const NavBar: React.FC = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={'/profile'} activeClassName={s.active}>
                <img src={ProfileIco}/> Profile
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to={'/Dialogs'} activeClassName={s.active}>
                <img src={MessagesIco}/> Messages
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to={'/Chat'} activeClassName={s.active}>
                <img src={ChatIco}/> Chat
            </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to={'/Music'} activeClassName={s.active}>
                <img src={MusicIco}/> Music
            </NavLink>
        </div>



        <div className={s.item}>
            <NavLink to={'/Users'} activeClassName={s.active}>
                <img src={UsersIco}/> Users
            </NavLink>
        </div>


        {/*<div className={s.item}>*/}
        {/*    <NavLink to={'/News'} activeClassName={s.active}>*/}
        {/*        <img src={NewsIco}/> News*/}
        {/*    </NavLink>*/}
        {/*</div>*/}


        {/*<div className={s.item}>*/}
        {/*    <NavLink to={'/Setting'} activeClassName={s.active}>*/}
        {/*        <img src={SettingIco}/> Setting*/}
        {/*    </NavLink>*/}
        {/*</div>*/}

    </nav>
}

export default NavBar;