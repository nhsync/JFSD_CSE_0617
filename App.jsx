import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');  // State to store the input value
  const [message, setMessage] = useState('');        // State to store the output message

  // Function to handle form submission
  const handleSubmit = () => {
    setMessage(`Hello, ${inputValue}!`);
  };

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Greeting App</h1>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
        style={{ padding: '10px', margin: '10px' }}
      />
      
      <button 
        onClick={handleSubmit}
        style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Submit
      </button>
      
      {message && <h2>{message}</h2>}
    </div>
  );
}

export default App;