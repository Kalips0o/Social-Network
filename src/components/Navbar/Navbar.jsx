import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile' className = { navData => navData.isActive ? s.active : s.item }> Profile </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Dialogs' className = { navData => navData.isActive ? s.active : s.item }> Messages </NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/News' className = { navData => navData.isActive ? s.active : s.item }> News </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Music' className = { navData => navData.isActive ? s.active : s.item }> Music </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Setting' className = { navData => navData.isActive ? s.active : s.item }> Setting </NavLink>
        </div>
    </nav>
}

export default NavBar;