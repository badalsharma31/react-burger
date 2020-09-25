import React from "react"
import classes from "./NevigationItem.css"
const NevigationItem = (props) => {
    return (
        <ul className={classes.NevigationItem}> 
            <a href={props.link} 
            className={props.active ? classes.active : null}>
            {props.children}</a>
        </ul>
    )
}

export default NevigationItem;