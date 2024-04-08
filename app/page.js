'use client';
import { useState } from 'react';
import LogList from './components/LogList';
import AddLog from './components/AddLog';
import Hdr from './components/Hdr';

function Home() {

  const [logs, newLogs] = useState([
    {
      id: 'e1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwg__zRSlYIxxfZbf715g41nL-B6OI0dAxA&s',
      name: 'Costume Party',
      date: "5/12/2023",
      description: 'Dressed up as Ryan Gosling'
    },
    {
      id: 'e2',
      img: 'https://t4.ftcdn.net/jpg/03/03/62/45/360_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg',
      name: 'Cat',
      date: "5/18/2023",
      description: 'My cat Walter'
    },
    {
    id: 'e3',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_8bB8FRQc9RE_WiVL7Qyr8yK09p3JZewGA&s',
    name: 'Pasta',
    date: "6/2/2023",
    description: 'Pasta I cooked today'
    }
    
  ]);

  const addLogData = newLog => {
    newLogs(oldLogs => [...oldLogs, newLog])
    console.log(newLog);
  };
  
  return (
    <div>
      <Hdr />
      <AddLog onSaveLogData={addLogData}/>
      <LogList logs={logs} />
    </div>
  );
}

export default Home;