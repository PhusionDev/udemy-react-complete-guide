import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

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

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  assignmentChangeHandler = (event) => {
    this.setState({assignment: {
      text: event.target.value,
      textLength: event.target.value.length,
    }})
  }

  assignmentClickHandler = (charIndex) => {
    console.log(`index is ${charIndex}`);
    let assignment = {...this.state.assignment};
    let textArray = assignment.text.split('');
    textArray.splice(charIndex,1);
    assignment.text = textArray.join('');
    this.setState({assignment: assignment})

    // Instructor's Solution (adapted)
    // const text = this.state.assignment.text.split('');
    // text.splice(charIndex, 1);
    // const updatedText = text.join('');
    // this.setState({assignment: { text: updatedText }})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />
            )})}
        </div>
      );
    }

    // assignment specific code
    const charArray = this.state.assignment.text.split('');
    const charComponents = (
      <div>
        {charArray.map((c, index) => {
          return <CharComponent
            char={c}
            key={index}
            click={() => this.assignmentClickHandler(index)}
            />
        })}
      </div>
    );

    // end assignment specific code

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
        <div className="assignment">
          <input type="text" className="input-field"
            onChange={(event) => this.assignmentChangeHandler(event)}
            value={this.state.assignment.text} />
          <p>{this.state.assignment.text.length}</p>
          <ValidationComponent textLength={this.state.assignment.text.length} />
          {charComponents}
        </div>
      </div>
    );
  }
}

export default App;
