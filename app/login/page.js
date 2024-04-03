'use client'
import ExpenseItem from '../components/ExpenseItem';
import Expenses from '../components/Expenses';
import { Typography, Button, Container, Grid, Paper, Tabs, Tab, Box, Toolbar, TextField} from '@mui/material';
import React, { useState, useEffect, createContext, useContext, useNavigate } from 'react';
import { useLogin } from '../../LoginContext';
import { useRouter } from 'next/navigation';

    const LoginPage = () => {
  
        const [Email, setEmail] = useState('');
        const [Password, setPassword] = useState('');
       // set email and password 
        const { login, loggedIn, logout  } = useLogin();
       // load login varaibles from Global instances
       const router = useRouter();
     
     
       useEffect(() => {
         if (loggedIn) {
           console.log("well done");
           console.log(loggedIn);
          
         } else {
           console.log("logged out")
         }
       }, [loggedIn]); // Run the effect whenever the loggedIn state changes
     
       const handleLogin = (e) => {
         e.preventDefault();
     
         if (Email === 'a' && Password === 'p') {
           login()
           router.push('/about');
         } else {
           alert('Invalid email or password');

         }
       }


       const handleLogout = () => {
        logout(); // Perform logout logic
      };
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Car',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
    <h1>Insight Journal</h1>
    <Container style={{ padding: '25px',  borderRadius: 16 }}>
                <Typography variant="h4" align="center" gutterBottom  className = "logoName">
                  Login
                </Typography>
               
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <span style={{ marginLeft: '13px' }}>
                    <Typography className = "login" variant="h4" align="center" gutterBottom margin='10px' padding = '20px'>
                        Email    
                    </Typography>
                    </span>
                    <span style={{ marginLeft: '15px' }}>
                    <TextField label="Email" variant="outlined" value = {Email} onChange={(e => setEmail(e.target.value))} sx={{ textAlign: 'center' }} InputProps = {{style:{ borderColor: 'white'}}} />
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <Typography className = "login" variant="h4" align="center" gutterBottom margin='12px' padding-right = '30px'>
                        Password
                    </Typography>
                    <TextField label="Password" variant="outlined" value = {Password} onChange={(e => setPassword(e.target.value))}  sx={{ textAlign: 'center' }} margin='20px' />
                </div>
                      {/*Onchange function is what lets you typei nto the text boxes*/ }
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button size="large" variant="contained" color="secondary" onClick={handleLogin}>
                        Login
                    </Button>
                </div>
               
                {/* Other content */}
            </Container>
        
    
      
    </div>
  );
}
    
export default LoginPage;

