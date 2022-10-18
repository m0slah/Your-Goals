import React from "react";
import classes from "./ErrorModals.module.css";

const ErrorModals = (props) => {
  return (
    <div>
      <div>
        <div className={classes.backdrop} />
        <div className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.onConfirm}>Okay</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModals;
