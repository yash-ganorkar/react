import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state = {
        persons: [
            {firstName: 'Yash', lastName: 'Ganorkar'},
            {firstName: 'Aseem', lastName: 'Wangoo'}
        ]
    };

    switchNameHandler = (newFirstName) => {
        this.setState({
            persons:
                [
                    {firstName: newFirstName, lastName: 'Ganorkar'},
                    {firstName: 'Ajay', lastName: 'Wangoo'}
                ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons:
                [
                    {firstName: event.target.value, lastName: 'Ganorkar'},
                    {firstName: 'Ajay', lastName: 'Wangoo'}
                ]
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

    render() {

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
                        <button style={style} onClick={this.switchNameHandler.bind(this, 'Aishwarya')}>Passing Value to
                            function using .bind()
                        </button>
                        <button style={style} onClick={() => this.switchNameHandler('Hahaha')}>Passing Value to function
                            using Arrow()
                        </button>
                    </div>
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
                </p>
            </div>
        );
    }
}

export default App;
