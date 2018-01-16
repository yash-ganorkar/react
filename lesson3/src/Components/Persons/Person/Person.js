import React, {Component} from 'react';
import './Person.css'


class Person extends Component {
    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}> I am {this.props.firstName} {this.props.lastName}</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.firstName} onChange={this.props.nameChangedHandler}/>
                {/*<button onClick={props.nameChanged}>Change Name</button>*/}
            </div>
        )
    }
}

export default Person;