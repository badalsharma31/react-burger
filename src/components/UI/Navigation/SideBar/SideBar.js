import React from "react";
import Logo from "../../../Logo/Logo";
import NevigationItems from "../NevigationItems/NevigationItems";
import classes from "./SideBar.css";
import Backdrop from "../../../UI/Backdrop";
import Aux from "../../../../hoc/Aux";

const SideBar = (props) => {
    let sidebarClass = [classes.SideBar, classes.closed];
    if(props.show) {
        sidebarClass = [classes.SideBar, classes.open];
    }
    return (
        <Aux>
            <Backdrop show={props.show} cancelPurchase= {props.closed}></Backdrop>
            <div className={sidebarClass.join(" ")}>
                <Logo clicked={props.closed} ></Logo>
                <nav>
                    <NevigationItems></NevigationItems>
                </nav>
            </div>
        </Aux>
        
    )
}

export default SideBar;