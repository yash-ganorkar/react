import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I am {props.firstName} {props.lastName} and I
                am {Math.floor(Math.random() * 30)} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.firstName} onChange={props.nameChangedHandler}/>
            <button onClick={props.nameChanged}>Change Name</button>
        </div>
    )
};

export default person;