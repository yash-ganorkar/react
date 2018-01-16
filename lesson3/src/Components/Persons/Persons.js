import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person key={person.id}
                           click={this.props.deletePersonHandler.bind(this, index)}
                           firstName={person.firstName}
                           lastName={person.lastName}
                           nameChangedHandler={(event) => this.props.nameChangedHandler(event, person.id)}/>
        });
    }
}

export default Persons;