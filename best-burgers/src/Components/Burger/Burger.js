import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import Classes from './Burger.css'

const Burger = (props) => {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="meat"/>
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default Burger
