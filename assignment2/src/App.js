import React, {Component} from 'react';

import './App.css';

import ValidationComponent from './component/ValidationComponent'
import CharComponent from "./component/CharComponent";

class App extends Component {

    state = {
        characterLength: 0,
        userInput: ""
    };
    displayLengthOfText = (event) => {

        const length = event.target.value.length;
        this.setState({
            characterLength: length,
            userInput: event.target.value
        })
    };

    deleteCharHandler = (index) => {
        const string = this.state.userInput.split('');

        string.splice(index, 1);

        const newString = string.join('');
        this.setState({
            userInput: newString
        })

    };

    render() {

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <CharComponent character={ch} key={index} clicked={this.deleteCharHandler.bind(this, index)}>

            </CharComponent>
        });

        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                <div>
                    <h2>Solution</h2>
                </div>

                <div>
                    Enter Content: <input onChange={this.displayLengthOfText} type="text"/>
                </div>
                <div>

                    <ValidationComponent length={this.state.characterLength}/>
                    {charList}
                </div>
            </div>


        );
    }
}

export default App;
