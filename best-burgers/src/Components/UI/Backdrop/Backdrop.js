import React from 'react'
import Classes from './Backdrop.css'

const Backdrop = (props) => (
    props.showProp ? <div onClick={props.dismiss} className={Classes.Backdrop}></div> : null
);

export default Backdrop;