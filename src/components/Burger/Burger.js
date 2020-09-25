import React from "react";

import classes from "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ingredients}) => {
    let updatedIngredients = [];
    let ingKeys =  Object.keys(ingredients);
    for(let i in ingKeys) {
        let key = ingKeys[i];
        let count = ingredients[key];
        for(let i =0; i< count; i++) {
            let ingredient = (<BurgerIngredient key={key+i} type={key}/>)
            updatedIngredients.push(ingredient);
        }

    }

    if(updatedIngredients.length == 0) {
        updatedIngredients = "please add ingredient"
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {updatedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}


export default Burger;