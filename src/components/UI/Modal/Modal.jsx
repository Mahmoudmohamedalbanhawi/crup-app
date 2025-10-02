import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
