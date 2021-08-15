import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <ReactPlayer
        width="480px"
        height="240px"
        controls
        url="https://gdurl.com/8Zx0"
      />
    </div>
  );
}

export default App;
