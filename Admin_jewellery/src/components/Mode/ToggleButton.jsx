// ToggleButton.jsx
import React from 'react';

const ToggleButton = ({ mode, onChange }) => {
  return (
    <select value={mode} onChange={onChange}>
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
      <option value="system">System Default</option>
    </select>
  );
};

export default ToggleButton;
