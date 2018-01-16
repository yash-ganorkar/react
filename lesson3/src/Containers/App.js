import React, {Component} from 'react';

import './App.css';

import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {

    state = {
        persons: [
            {id: 'gjfjg', firstName: 'Yash', lastName: 'Ganorkar'},
            {id: 'uiyui', firstName: 'Aseem', lastName: 'Wangoo'}
        ],
        showPersons: false,
        displayButton: "Show View"
    };

    deletePersonHandler = (personIndex) => {

        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];

        persons.splice(personIndex, 1);

        this.setState({persons: persons})
    };
    nameChangedHandler = (event, index) => {

        //get index of the updated element
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === index;
        });

        //get the required element from the state to avoid mutating state
        const person = {
            ...this.state.persons[personIndex]
        };

        //update the required field of the particular element in the array
        person.firstName = event.target.value;

        //create copy of original array
        const persons = [...this.state.persons];

        //assign the updated element to the newly created copy of an array
        persons[personIndex] = person;

        //set the state with the newly created copy
        this.setState({
            persons: persons
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
        if (!doesShow) {
            this.setState({displayButton: "Hide View"})
        }
        else {
            this.setState({displayButton: "Show View"})
        }
    };

    render() {


        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        deletePersonHandler={this.deletePersonHandler}
                        nameChangedHandler={this.nameChangedHandler}/>
                </div>


            );

        }


        return (
            <div className="App">
                <Cockpit persons={this.state.persons}
                         showPersons={this.state.showPersons}
                         buttonText={this.state.displayButton}
                         togglePersonHandler={this.togglePersonHandler}/>
                        {persons}
            </div>


        );
    }
}

export default App;
