import React from "react";
import burgerLogo from "./burger-logo.png"
import classes from "./Logo.css";

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger Logo" onClick={props.clicked}></img>
        </div>
    )
}

export default Logo;