import React from 'react';
import classes from "./Logo.module.scss";
import logoImg from "../../images/logo.svg";

const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
        <img src={logoImg} alt="Logo" />
    </a>
  )
}

export default Logo
