import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './InputOutput/UserInput'
import UserOutput from './InputOutput/UserOutput'

class App extends Component {

    state = {
        usernames: [
            {username: "yash"},
            {username: "ravi"},
            {username: "aseem"}
        ]
    };

    changeUsernameHandler = (newUsername) => {
        this.setState({
            usernames: [
                {username: newUsername},
                {username: "ravi2"},
                {username: "aseem2"}
            ]
        })
    };

    inputChangedEventHandler = (event) => {
        this.setState({
            usernames: [
                {username: event.target.value},
                {username: "ravi2"},
                {username: "aseem2"}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.


                    <div>
                        UserInput
                        <UserInput inputChangedEventHandler={this.inputChangedEventHandler}
                                   username={this.state.usernames[0].username}
                        />
                    </div>


                    <div>
                        UserOutput
                        <UserOutput clickEvent={this.changeUsernameHandler}
                                    username={this.state.usernames[0].username}/>
                        <UserOutput clickEvent={this.changeUsernameHandler}
                                    username={this.state.usernames[1].username}/>
                        <UserOutput clickEvent={this.changeUsernameHandler}
                                    username={this.state.usernames[2].username}/>
                    </div>

                </p>
            </div>
        );
    }
}

export default App;
