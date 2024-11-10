import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Demo() {
  const [inputText, setInputText] = useState(''); 
  const [displayText, setDisplayText] = useState(''); 


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  
  const handleButtonClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hekayənizi yazın və bizimlə bölüşün</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Yazmağa başlayın"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
      <btn type="button" class="btn btn-primary" onClick={handleButtonClick} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
        Göndər
      </btn>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>Hekayəniz: {displayText}</p>
    </div>
  );
}

export default Demo;
