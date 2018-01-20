import React from 'react'
import Classes from './Modal.css'

import Aux from '../../../HOC/Aux'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => (
    <Aux>
        <Backdrop dismiss={props.dismiss} showProp={props.showProp}/>
        <div
            className={Classes.Modal} style={{
            transform: props.showProp ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.showProp ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;