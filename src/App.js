import './App.css';
import React from 'react';
// import Header from './components/Header/Header';
import useTelega from './hooks/UseTelegram';

function App() {
  const { tg, onToggleButton } = useTelega();
  
  React.useEffect(() => {
    tg.ready()
    // eslint-disable-next-line
  }, [])
   return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
      {/* <Header /> */}
    </div>
  );
}

export default App;
