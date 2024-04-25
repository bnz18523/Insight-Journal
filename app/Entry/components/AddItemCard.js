import React, { useState } from 'react';
import './addItemCard.css';
import Card from './Card';

function AddItemCard({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');

  const handleAddItem = () => {
    if (!title || !description || !imageUrl || !date) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new item object with the entered data
    const newItem = {
      id: Math.random(),
      title: title,
      description: description,
      imageUrl: imageUrl,
      date: date // Include the date in the new item object
    };

    // Call the onAdd function passed from the parent component
    onAdd(newItem);

    // Reset input fields
    setTitle('');
    setDescription('');
    setImageUrl('');
    setDate('');
  };

  return (
    
    <div className="addItemCard">
        <Card className="input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAddItem}>+</button>
      </Card>
    </div>
  );
}

export default AddItemCard;