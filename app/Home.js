import React from 'react';
import Note from './Note';

function Home() {

  const notes = [
    {
      id: 'e1',
      genre: "Sports",
      title: "Falcon's Games",
      img: "placeholder",
      date: new Date(2021, 9, 16)
    },
    {
      id: 'e2',
      genre: "Cooking",
      title: "Pasta",
      img: "placeholder",
      date: new Date(2022, 4, 30)
    },
    {
      id: 'e3',
      genre: "Daily",
      title: "Biking",
      img: "placeholder",
      date: new Date(2023, 2, 8)
    },
  ]

  return (
    <div className="home">
      <h2>Welcome to Insight Journal</h2>
      <div className="notes">
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Home;
