import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  let classArray = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    classArray.push('red');
  }
  if (props.persons.length <= 1) {
    classArray.push('bold');
  }
  const assignedClasses = classArray.join(' ');

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;