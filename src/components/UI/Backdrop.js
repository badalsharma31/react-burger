import React from 'react';
import classes from "./Backdrop.css";
const Backdrop = (props) => {
    console.log("in backdrop +++++", props)
    return (
        props.show ? <div className={classes.Backdrop} onClick={props.cancelPurchase}></div> : null
    )
}

export default Backdrop;