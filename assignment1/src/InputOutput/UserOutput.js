import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.clickEvent}>Para 1 Username: {props.username}</p>
            <p>Para 2</p>
        </div>
    )
};

export default UserOutput;