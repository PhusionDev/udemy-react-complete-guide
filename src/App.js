import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    user: {
      username: "user",
      password: "password"
    }
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      user: {
        username: event.target.value,
        password: this.state.user.password
      }
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <UserOutput
          text1="Hello this is a random paragraph of text #1"
          text2="This is another paragraph of text just to illustrate the point"
        />
        <UserOutput
          text1="And yet another paragraph can you believe it?"
          text2="This just never ends, it keeps going seemingly."
        />
        <UserInput
          username={this.state.user.username}
          changed={this.usernameChangedHandler}
        />
        <UserOutput 
          text1={this.state.user.username}
          text2={this.state.user.password}
        />
      </div>
    );
  }
}

export default App;
