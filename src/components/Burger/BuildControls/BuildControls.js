import React from "react";
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl";
import buttonClass from "./button.css" 

const BuildControls = (props) => {

    let controls = [
        {label: "Cheese", type:"cheese"},
        {label: "Meat", type:"meat"},
        {label: "Bacon", type:"bacon"},

        {label: "Salad", type:"salad"}

    ]

    let buildControls = (
        <div>
            <p> Total Price : {props.price}</p>
            {controls.map(ctrl => 
                (<BuildControl key={ctrl.label} name={ctrl.label} add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
            ></BuildControl>))}

            <button className={buttonClass.OrderButton} disabled={!props.purchaseable} onClick={props.checkout}>Order Now</button>
        </div>
    )
    
    return (
        <div>
            <div className={classes.container}>
                
                <div className={classes.BuildControls}>
                    {buildControls}
                </div>
            </div>
        </div>
        
    )
}

export default BuildControls;