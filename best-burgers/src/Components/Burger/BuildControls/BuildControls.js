import React from 'react';

import Classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
    return (
        <div className={Classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    more={() => props.more(ctrl.type)}
                    less={() => props.less(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))}

            <button className={Classes.OrderButton} disabled={!props.purchaseable}
                    onClick={props.orderBtnClickedHandler}>ORDER NOW
            </button>

        </div>
    )
};

export default BuildControls;