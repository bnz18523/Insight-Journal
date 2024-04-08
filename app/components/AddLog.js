import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddLog.css';
import './Log';
import './LogList';

const AddLog = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredURL, setEnteredURL] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const URLChangeHandler = (event) => {
    setEnteredURL(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const logData = {
      id: Math.random().toString(),
      name: enteredName,
      img: enteredURL,
      date: enteredDate,
      description: enteredDescription
    };
    if (logData.name == "") {
      alert("Please input a name for the user.");
    } else {
    props.onSaveLogData(logData);
    setEnteredDate('');
    setEnteredDescription('');
    setEnteredName('');
    setEnteredURL('');
    }
  }


  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label>Date </label>
        <input
          id="date"
          type="text"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          value={enteredURL}
          onChange={URLChangeHandler}
        />
        <label>Description</label>
         <input
          id="description"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddLog;
