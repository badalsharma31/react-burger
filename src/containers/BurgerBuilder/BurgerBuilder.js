import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import sendRequest from "../../sendRequest";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const prices = {
    "cheese": 10,
    "meat" : 20,
    "salad": 30,
    "bacon" :40
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            "cheese": 0,
            "meat" : 0,
            "salad": 0,
            "bacon" :0
        },
        totalPrice: 4,
        purchaseable : false,
        isCheckout : false,
        loading : false
    }

    handlePurchaseable (ingredientsObj) {
        
        let count = 0;
        for(let key in ingredientsObj) {
            count = count + ingredientsObj[key];
        }
        
        this.setState( {purchaseable : count > 0})
        console.log("purchaseable state +++", this.state.purchaseable);
    }

    addIngredients = (type) => {
        console.log('type is ', type)
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let stateCopy = {
            ...this.state
        }
        stateCopy.ingredients[type] = updatedCount;
        let price = prices[type];
        let totalPrice = this.state.totalPrice + price;
        stateCopy.totalPrice = totalPrice;

        this.setState(stateCopy);
        this.handlePurchaseable(stateCopy.ingredients)
    }

    removeIngredients = (type) => {
        console.log('type is in remove', type);
        let oldCount = this.state.ingredients[type];
        
        let updatedCount = 0;
        if(oldCount > 0){
            updatedCount = oldCount - 1;

        }else {
            updatedCount = 0;
        }
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        let totalPrice = this.state.totalPrice;
        let price = prices[type];
        let updatedPrice = totalPrice-price;

        if(updatedPrice < 0){
            updatedPrice = 0;
        }

        this.setState({totalPrice: updatedPrice, ingredients:updatedIngredients});
        this.handlePurchaseable(updatedIngredients);
        
    }

    handleCheckout = () => {
        console.log("checkout clicked +++++");
        this.setState({isCheckout : true})
    }

    cancelPurchase = () => {
        this.setState({isCheckout : false})
    }

    handlePurchaseContinue = () => {
        this.setState({loading: true})
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer : {
                name:"badal",
                address: "new USA",
                email: "test@gmail.com"
            },
            deliveryMethod: "fastest"
        }
        sendRequest.get('/orders.json', order)
        .then((response) => {
            // handle success
            console.log("res is +++++", response);
            this.setState({loading: false, isCheckout : false})
        })
        .catch((err) => {
            console.log("err ++++", err)
            this.setState({loading: false, isCheckout : false})
        })
    }

    render() {

        let modalContent = (<OrderSummary ingredients={this.state.ingredients} cancelOrder={this.cancelPurchase}
                    purchaseContinue= {this.handlePurchaseContinue} price={this.state.totalPrice}
                    ></OrderSummary>)
            
        if(this.state.loading == true)
            modalContent = <Spinner>loading.......</Spinner>
        return (
            <Aux>
                <Modal show={this.state.isCheckout} cancelPurchase= {this.cancelPurchase}>
                   {modalContent}
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                 addIngredient={this.addIngredients} 
                 removeIngredient= {this.removeIngredients}
                 price={this.state.totalPrice}
                 purchaseable = {this.state.purchaseable}
                 checkout = {this.handleCheckout}
                 ></BuildControls>
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, sendRequest);