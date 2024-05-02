import React from 'react';
import logo from '../../images/logo.svg';
import { menu } from "../../utils/menu";
import classes from "./Header.module.css";


const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <nav className={classes.header__navbar}>
                    <ul className={classes.navbar__menu}>
                        {
                            menu && menu.map((item, index) =>
                                <li className={classes.navbar__item} key={index}>
                                    <a href="#" className="navbar__link">
                                        {item}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
