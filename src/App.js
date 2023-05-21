import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/From/Form';
import useTelega from './hooks/UseTelegram';
import { Routes, Route } from 'react-router-dom';

function App() {
  const { tg } = useTelega();

  React.useEffect(() => {
    tg.ready()
    // eslint-disable-next-line
  }, [])
   return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
