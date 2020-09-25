import React from "react"
import classes from "./Toolbar.css"
import Logo from "../../../Logo/Logo"
import NevigationItems from "../NevigationItems/NevigationItems"
const Toolbar = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.leftNav}>
                <Logo clicked={props.clicked}/>
            </div>
            <div></div>
            <nav className={classes.desktopOnly}>
                <NevigationItems></NevigationItems>
            </nav>
        </div>
        

    )
}

export default Toolbar;