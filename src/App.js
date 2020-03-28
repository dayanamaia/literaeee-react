import React from 'react';
import Routes from './Routes';
import Sidebar from './components/Sidebar/Sidebar.js';
import './App.css';

function App() {
  const lang = 'Inglês';

  return (
    <>
      <Sidebar lang={lang} />
      <main className="main">
        <Routes />
      </main> 
    </>
  );
}

export default App;
