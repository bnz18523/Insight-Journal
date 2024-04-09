import React, { useState } from 'react';

function Daily() {
  const [dailyItems, setDailyItems] = useState([]);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), content: `Journal Entry ${dailyItems.length + 1}` };
    setDailyItems([...dailyItems, newItem]);
  };

  return (
    <div>
      <ul>
        {dailyItems.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Daily;