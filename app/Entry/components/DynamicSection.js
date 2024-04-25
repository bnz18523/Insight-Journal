import React, { useState } from 'react';
import AddItemCard from './AddItemCard';
import Card from './Card'; // Import the Card component

function DynamicSection({ sectionName }) {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <AddItemCard onAdd={handleAddItem} />
      <div className="itemList">
        {items.map((item) => (
          <Card key={item.id} className="itemCard">
            <div className = "itemTop">
            <h3>{item.title}</h3>
            <h3>Date: {item.date}</h3>
            </div>
            <div className = "itemDescription">
            <p>{item.description}</p>
            </div>
            <img src={item.imageUrl} alt={item.title} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DynamicSection;