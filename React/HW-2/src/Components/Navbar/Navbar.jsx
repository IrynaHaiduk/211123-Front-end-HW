import React from 'react';
import classes from "./Navbar.module.scss";
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = () => {
    /* 
        const setActiveLink = ({ isActive }) =>
            classNames(classes.navbar__link, { [classes.navbar__linkActive]: isActive }); */

    const setActiveLink = ({ isActive }) => isActive ? classNames(classes.navbar__link, classes.navbar__linkActive) :
        classNames(classes.navbar__link);

    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar__list}>
                <li className={classes.navbar__item}>
                    <NavLink to={`/`} className={setActiveLink}>
                        Главная
                    </NavLink>
                </li>
                <li className={classes.navbar__item}>
                    <NavLink to={`/about`} className={setActiveLink}>
                        О компании
                    </NavLink>
                </li>
                <li className={classes.navbar__item}>
                    <NavLink to={`/modal`} className={setActiveLink}>

                        Модалки
                    </NavLink>
                </li>
                <li className={classes.navbar__item}>
                    <NavLink to={`/contacts`} className={setActiveLink}>
                    </NavLink>
                </li>
                <li className={classes.navbar__item}>
                    <NavLink to={`/partners`} className={setActiveLink}>
                        Партнеры
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
