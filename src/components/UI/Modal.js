import React, {Component} from "react";
import classes from "./Modal.css";
import Aux from "../../hoc/Aux"
import Backdrop from "../UI/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show

        
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component will update called in modal ++++++");
    }
    render() {
        let modal = "";
        if(this.props.show) {
            modal = (<div className ={classes.Modal}>
                        {this.props.children}
                    </div>)
        }else {
            modal = <div></div>
        }
        return (
            <Aux>     
                <Backdrop show={this.props.show} cancelPurchase={this.props.cancelPurchase}></Backdrop>       
                <div >
                    {modal}
                </div>
            </Aux>
        )
    }
    
}

export default Modal; 