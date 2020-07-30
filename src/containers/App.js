import React, { Component } from 'react';

import './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 4766, name: 'Max', age: 28 },
      { id: 54888, name: 'Manu', age: 29 },
      { id: 329, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    assignment: {
      text: ''
    }
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } */
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />
            )})}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classArray = [];
    if (this.state.persons.length <= 2) {
      classArray.push('red');
    }
    if (this.state.persons.length <= 1) {
      classArray.push('bold');
    }
    const classes = classArray.join(' ');

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;