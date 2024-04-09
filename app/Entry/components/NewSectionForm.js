import React, { useState } from 'react';

function NewSectionForm({ onSubmit, onCancel }) {
  const [sectionName, setSectionName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sectionName.trim()) {
      onSubmit(sectionName.trim());
      setSectionName('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          placeholder="Enter section name"
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewSectionForm;