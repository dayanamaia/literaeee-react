import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.js';
import './App.css';

function App() {
  const lang = 'Inglês';

  return (
    <>
      <Sidebar lang={lang} />
      <main className="main"></main> 
    </>
  );
}

export default App;
