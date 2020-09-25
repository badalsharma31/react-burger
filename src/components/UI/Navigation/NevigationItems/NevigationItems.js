import React from "react"
import NevigationItem  from "./NevigationItem/NevigationItem";
import classes from "./NevigationItems.css"
const NevigationItems = (props) => {
    return (
        <div className = {classes.NevigationItems}>
            <NevigationItem link="/" active="active">Build Burger</NevigationItem>
            <NevigationItem link="/" >Checkout</NevigationItem>
        </div>
    )
}

export default NevigationItems;