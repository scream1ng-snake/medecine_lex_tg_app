import './App.css';
import React from 'react';

const tg = window.Telegram.WebApp;

function App() {
  function onClose() {
    tg.close();
  }

  React.useEffect(() => {
    tg.ready()
  }, [])
   return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
