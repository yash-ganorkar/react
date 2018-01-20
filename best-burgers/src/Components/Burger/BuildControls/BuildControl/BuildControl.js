import React from 'react'
import Classes from './BuildControl.css'

const BuildControl = (props) => (
    <div className={Classes.BuildControl}>
        <div className={Classes.Label}>{props.label}</div>
        <button disabled={props.disabled} onClick={props.less} className={Classes.Less}>Less</button>
        <button onClick={props.more} className={Classes.More}>More</button>
    </div>

);

export default BuildControl;