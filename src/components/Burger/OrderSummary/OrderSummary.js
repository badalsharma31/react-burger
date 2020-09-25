import React, {Component} from "react";
import Button from "../../UI/Button";
class OrderSummary extends Component {
    //This could be a functional component.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component will update called ++++++");
    }

    render() {
        let ingredients = [];
        for(let key in this.props.ingredients) {
            let ingredient = (
                <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span> : {this.props.ingredients[key]}</li>
            )
            ingredients.push(ingredient);
        }

        return (
            <div>
                <h2> Order Summary</h2>
                <p>Your delious order is ready....</p>
                {ingredients}
                <p><strong>Price : {this.props.price}</strong></p>
                <p>Please checkout to continue</p>
    
                <Button type="Danger" clicked={this.props.cancelOrder}>Cancel</Button>
                <Button type="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </div>
        )
    } 
}

export default OrderSummary;