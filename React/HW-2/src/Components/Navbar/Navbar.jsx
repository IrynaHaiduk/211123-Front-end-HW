import React from 'react';
import classes from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar__list}>
                <li className={classes.navbar__item}>
                    <a href="" className={classes.navbar__link}>
                        Главная
                    </a>
                </li>
                <li className={classes.navbar__item}>
                    <a href="" className={classes.navbar__link}>
                        О компании
                    </a>
                </li>
                <li className={classes.navbar__item}>
                    <a href="" className={classes.navbar__link}>
                        Модалки
                    </a>
                </li>
                <li className={classes.navbar__item}>
                    <a href="" className={classes.navbar__link}>
                        Контакты
                    </a>
                </li>
                <li className={classes.navbar__item}>
                    <a href="" className={classes.navbar__link}>
                        Партнеры
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
