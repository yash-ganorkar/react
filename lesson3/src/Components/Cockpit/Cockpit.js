import React from 'react'
import logo from '../../Assets/logo.svg';

//stateless components
const Cockpit = (props) => {

    const paragraphClasses = [];

    if (props.persons.length <= 2) {
        paragraphClasses.push('red')
    }
    if (props.persons.length <= 1) {
        paragraphClasses.push('bold')
    }

    const newParagraphClasses = paragraphClasses.join(' ');

    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        cursor: 'pointer',
        padding: '8px',
        color: 'white'
    };

    if (props.showPersons) {
        style.backgroundColor = "red";
    }
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>

            <p className={newParagraphClasses}>Some Paragraph</p>
            <button style={style}
                    onClick={props.togglePersonHandler}>
                {props.buttonText}
            </button>
        </div>
    )
};

export default Cockpit;