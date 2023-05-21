import './App.css';
import React from 'react';
import Header from './components/Header/Header';

function App() {
  const tg = window.Telegram.WebApp;
  
  React.useEffect(() => {
    tg.ready()
  }, [])
   return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
