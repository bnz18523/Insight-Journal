import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './UserSignup.css';

const UserSignup= (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDescription2, setEnteredDescription2] = useState('');


  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const descriptionChangeHandler2 = (event) => {
    setEnteredDescription2(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const logData = {
      id: Math.random().toString(),
      name: enteredName,
      description: enteredDescription,
      description2: enteredDescription2
    };
    if (logData.name == "" && logData.description == "") {
      alert("Please input your username and password.");
    }
    if (logData.description != logDate.description2) {
      alert("Please make sure your password was correctly typed.")
    } else {
    props.onSaveLogData(logData);
    setEnteredDescription('');
    setEnteredDescription2('');
    setEnteredName('');
    }
  }


  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label>Password</label>
         <input
          id="description"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <label>Confirm Password</label>
         <input
          id="description"
          type="text"
          value={enteredDescription2}
          onChange={descriptionChangeHandler2}
        />
        <Button type="submit">Signup</Button>
      </form>
    </Card>
  );
};


export default UserSignup;
