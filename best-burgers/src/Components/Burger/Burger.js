import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import Classes from './Burger.css'

const Burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey}/>
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients</p>
    }
    console.log(ingredients);
    return (
        <div>

            <div className={Classes.Burger}>
                <BurgerIngredients type="bread-top"/>
                {ingredients}
                <BurgerIngredients type="bread-bottom"/>
            </div>
        </div>

    );
};

export default Burger
