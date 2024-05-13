import React from 'react';
import classes from "./Modal.module.scss";
import iconClose from "../../images/icon-close.svg";


const Modal = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modal__wrap}>
                <h2 className={classes.modal__title}>
                    Fetch posts
                </h2>
                <ul className={classes.modal__list}>
                    <li className={classes.modal__item}>
                        <div className={classes.modal__container}>
                            <span className={classes.modal__caption}>
                                Title:
                            </span>
                            <div className={classes.modal__info}>
                                Info Title
                            </div>
                        </div>
                        <div className={classes.modal__container}>
                            <span className={classes.modal__caption}>
                                Body:
                            </span>
                            <div className={classes.modal__info}>
                                description
                            </div>
                        </div>
                    </li>
                    <li className={classes.modal__item}>
                        <div className={classes.modal__container}>
                            <span className={classes.modal__caption}>
                                Title:
                            </span>
                            <div className={classes.modal__info}>
                                Info Title
                            </div>
                        </div>
                        <div className={classes.modal__container}>
                            <span className={classes.modal__caption}>
                                Body:
                            </span>
                            <div className={classes.modal__info}>
                                description
                            </div>
                        </div>
                    </li>

                </ul>
                <div className={classes.modal__close} onClick={props.onHandleClick}>
                    <img src={iconClose} alt="Close window" />
                </div>
            </div>
        </div>
    )
}

export default Modal
