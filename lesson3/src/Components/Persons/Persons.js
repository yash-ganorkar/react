import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    return <Person key={person.id}
                   click={props.deletePersonHandler.bind(this, index)}
                   firstName={person.firstName}
                   lastName={person.lastName}
                   nameChangedHandler={(event) => props.nameChangedHandler(event, person.id)}/>
});

export default Persons;