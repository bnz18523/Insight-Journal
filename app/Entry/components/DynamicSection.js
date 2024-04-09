import React, { useState } from 'react';

function DynamicSection({ sectionName }) {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), content: `Journal Entry ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={handleAddItem}>+</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicSection;