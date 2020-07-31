/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  const classArray = [];
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
      <h1>{props.title}</h1>
      <p className={assignedClasses}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
