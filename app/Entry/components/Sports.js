import React, { useState } from 'react';

function Sports() {
  const [sportItems, setSportItems] = useState([]);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), content: `Journal Entry ${sportItems.length + 1}` };
    setSportItems([...sportItems, newItem]);
  };

  return (
    <div>
      <ul>
        {sportItems.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sports;