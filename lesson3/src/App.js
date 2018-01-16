import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';

import Person from './Person/Person';


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

        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            cursor: 'pointer',
            padding: '8px',
            color: 'white'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person key={person.id}
                                       click={this.deletePersonHandler.bind(this, index)}
                                       firstName={person.firstName}
                                       lastName={person.lastName}
                                       nameChangedHandler={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}

                </div>


            );
            style.backgroundColor = "red";
        }

        const paragraphClasses = [];

        if (this.state.persons.length <= 2) {
            paragraphClasses.push('red')
        }
        if (this.state.persons.length <= 1) {
            paragraphClasses.push('bold')
        }

        const newParagraphClasses = paragraphClasses.join(' ');

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className={newParagraphClasses}>Some Paragraph</p>
                    <div>
                        <button style={style}
                                onClick={this.togglePersonHandler}>
                            {this.state.displayButton}
                        </button>

                        {persons}

                    </div>


            </div>
        );
    }
}

export default App;
