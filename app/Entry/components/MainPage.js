import React, { useState } from 'react';
import Sports from './Sports';
import Daily from './Daily';
import Cooking from './Cooking';
import NewSectionForm from './NewSectionForm';
import DynamicSection from './DynamicSection';
import Button from './Button';

function MainPage() {
  const [sections, setSections] = useState(['Sports', 'Daily', 'Cooking']);
  const [showNewSectionForm, setShowNewSectionForm] = useState(false);

  const handleAddSection = (sectionName) => {
    setSections([...sections, sectionName]);
    setShowNewSectionForm(false);
  };

  const handleCancelAddSection = () => {
    setShowNewSectionForm(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Main Journal Page</h1>
        <div>
          <button onClick={() => setShowNewSectionForm(true)}>Add Section</button>
          <Button><a href="/">Logout</a></Button>
        </div>
      </div>
      {showNewSectionForm && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <NewSectionForm
            onSubmit={handleAddSection}
            onCancel={handleCancelAddSection}
          />
        </div>
      )}
      <div style={{ display: 'flex' }}>
        {sections.map((section, index) => (
          <div key={index} style={{ flex: 1, padding: '10px' }}>
            <h2>{section}</h2>
            {section === 'Sports' && <Sports />}
            {section === 'Daily' && <Daily />}
            {section === 'Cooking' && <Cooking />}
            {sections.includes(section) && <DynamicSection sectionName={section} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;