import React from "react";
import classes from "./Button.css"
const Button = (props) => {
    console.log("class in button ", ["Button", classes[props.type]].join(''));
    return (<button 
                onClick={props.clicked}
                className="Button Danger"
            >
                {props.children}
            </button>)
}

export default Button;