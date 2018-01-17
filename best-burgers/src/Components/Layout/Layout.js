import React from 'react'
import Aux from '../../HOC/Aux'
import Classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div>
            Toolbar,Sidedrawer,Backdrop
        </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;