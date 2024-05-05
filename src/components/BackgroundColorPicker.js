import React, { useState } from 'react';

const BackgroundColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.3s' }}>
      <h1>My Colorful Portfolio</h1>
      <div>
        <button onClick={() => handleColorChange('#ffffff')}>Default</button>
        <button onClick={() => handleColorChange('#f8f9fa')}>Light Gray</button>
        <button onClick={() => handleColorChange('#c3e6cb')}>Green</button>
        <button onClick={() => handleColorChange('#ffc107')}>Yellow</button>
      </div>
      {/* Render other components here */}
    </div>
  );
};

export default BackgroundColorPicker;
