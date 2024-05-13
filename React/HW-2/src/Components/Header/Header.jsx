import React from 'react';
import classes from "./Header.module.css";
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.header__container}>
                    <div className={classes.header__wrap}>
                        <Logo />
                        <h1 className={classes.header__title}>
                            Pallas cat studio
                        </h1>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header
