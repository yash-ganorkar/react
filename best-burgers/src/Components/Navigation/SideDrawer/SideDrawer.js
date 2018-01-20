import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Classes from './SideDrawer.css'
import Aux from '../../../HOC/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

    let attachedClasses = [Classes.SideDrawer, Classes.Close];

    if (props.open) {
        attachedClasses = [Classes.SideDrawer, Classes.Open]
    }
    return (
        <Aux>
            <Backdrop showProp={props.open} dismiss={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={Classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;