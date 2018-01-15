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

    // switchNameHandler = (newFirstName) => {
    //     this.setState({
    //         persons:
    //             [
    //                 {firstName: newFirstName, lastName: 'Ganorkar'},
    //                 {firstName: 'Ajay', lastName: 'Wangoo'}
    //             ]
    //     })
    // };

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

    nameChanged = () => {
        this.setState({
            persons:
                [
                    {firstName: "Gayatri", lastName: 'Ganorkar'},
                    {firstName: 'Ajay', lastName: 'Wangoo'}
                ]
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
                    {this.state.persons.map((person, index) => {
                        return <Person key={person.id}
                                       click={this.deletePersonHandler.bind(this, index)}
                                       firstName={person.firstName}
                                       lastName={person.lastName}
                                       nameChangedHandler={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                    {/*
                    <Person
                        nameChanged={this.nameChanged}
                        nameChangedHandler={this.nameChangedHandler}
                        click={this.switchNameHandler.bind(this, 'Shruti')}
                        firstName={this.state.persons[0].firstName}
                        lastName={this.state.persons[0].lastName}/>
                    <Person

                        firstName={this.state.persons[1].firstName}
                        lastName={this.state.persons[1].lastName}>
                        I live in Hyderabad!!
                    </Person>
*/}
                </div>

            );
        }

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            cursor: 'pointer',
            padding: '8px'
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <div>
                        {/*<button style={style} onClick={this.switchNameHandler.bind(this, 'Aishwarya')}>Passing Value to*/}
                        {/*function using .bind()*/}
                        {/*</button>*/}
                        {/*<button style={style} onClick={() => this.switchNameHandler('Hahaha')}>Passing Value to function*/}
                        {/*using Arrow()*/}
                        {/*</button>*/}
                        <button style={style} onClick={this.togglePersonHandler}>
                            {this.state.displayButton}
                        </button>

                        {persons}

                    </div>


                </p>
            </div>
        );
    }
}

export default App;
