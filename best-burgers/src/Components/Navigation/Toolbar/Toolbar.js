import React from 'react'
import Classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => (

    <header className={Classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleHandler}/>
        <div className={Classes.Logo}>
            <Logo/>
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;