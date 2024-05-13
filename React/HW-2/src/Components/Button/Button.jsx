import React from 'react';
import classes from "./Button.module.scss";

const Button = (props) => {
    return (
        <button className={classes.button} onClick={props.onHandleClick}>
            Fetch
        </button>
    )
}

export default Button
