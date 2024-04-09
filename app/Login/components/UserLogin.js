import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '../LoginContext';
import Card from './Card';
import Button from './Button';
import './UserLogin.css';

const UserLogin = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const { login, loggedIn, logout  } = useLogin();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    const logData = {
      id: Math.random().toString(),
      name: enteredName,
      description: enteredDescription
    };
    if (logData.name == "" && logData.description == "") {
      alert("Please input your username and password.");
    } else {
    //props.onSaveLogData(logData);
    setEnteredDescription('');
    setEnteredName('');
    }

    if (logData.name == "user" && logData.description == "pass") {
    login();
    console.log("logged in");
      router.push('/');
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
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default UserLogin;
