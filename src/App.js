import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        username: 'Ron Peretz'
    };

    switchNameHandlerByClick = newName => {
        this.setState({
            username: newName
        })
    };

    switchUserNameHandler = event => {
        this.setState({
            username: event.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput changed={this.switchUserNameHandler} currentName={this.state.username}/>
                <UserOutput username={this.state.username} click={()=>this.switchNameHandlerByClick('Dana')}/>
            </div>
        );
    }
}

export default App;
