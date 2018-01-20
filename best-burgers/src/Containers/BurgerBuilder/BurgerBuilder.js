import React, {Component} from 'react'

import Aux from '../../HOC/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/BuildControls/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    // }
    state = {

        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5,
        purchasable: false,
        orderBtnClicked: false
    };

    orderBtnClickedHandler = () => {
        this.setState({orderBtnClicked: true})
    };

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, el) => {
                return sum + el
            }, 0);

        this.setState({purchasable: sum > 0})
    };

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;

        const newPrice = priceAddition + oldPrice;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)

    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;

        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)

    };

    purchaseCancelHandler = () => {
        this.setState({orderBtnClicked: false})
    };

    purchaseContinueHandler = () => {
        alert('You continue');
        this.purchaseCancelHandler()
    };

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }


        return (
            <Aux>
                <Modal dismiss={this.purchaseCancelHandler} showProp={this.state.orderBtnClicked}>
                    <OrderSummary
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        purchaseCancelHandler={this.purchaseCancelHandler}
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls more={this.addIngredientHandler}
                               less={this.removeIngredientHandler}
                               disabled={disableInfo}
                               orderBtnClickedHandler={this.orderBtnClickedHandler}
                               purchaseable={this.state.purchasable}
                               price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;