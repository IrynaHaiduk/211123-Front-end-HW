import React, { useState } from 'react';
import classes from "./ModalSection.module.scss";
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const ModalSection = () => {

    const [isOpenedModal, setIsOpenedModal] = useState(false);

    return (
        <div className={classes.modalSection}>
            <div className="container">
                <h2 className={classes.modalSection__title}>
                    Модальные окна
                </h2>
                <Button onHandleClick={() => setIsOpenedModal(!isOpenedModal)} />
                {
                    isOpenedModal && <Modal onHandleClick={() => setIsOpenedModal(!isOpenedModal)} />
                }

            </div>
        </div>
    )
}

export default ModalSection
