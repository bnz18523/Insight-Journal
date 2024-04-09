import React, { useState } from 'react';

function Cooking() {
  const [cookingItems, setCookingItems] = useState([]);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), content: `Journal Entry ${cookingItems.length + 1}` };
    setCookingItems([...cookingItems, newItem]);
  };

  return (
    <div>
      <ul>
        {cookingItems.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cooking;