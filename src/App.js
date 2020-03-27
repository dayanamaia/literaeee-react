import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.js';
import ListWords from './components/ListWords/ListWords.js';
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
