import React from 'react'

import burgerLogo from '../../Assets/Images/burger-logo.png'
import Classes from './Logo.css'

const Logo = (props) => (
    <div className={Classes.Logo}
         style={{height: props.height}}>
        <img src={burgerLogo}
             alt="Best Burgers"/>
    </div>
);

export default Logo;