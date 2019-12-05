import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import { addTouchdown } from './helpers/addTouchdown';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  if (quarter > 4) {
    setQuarter(1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Scoreboard</h1>
        </header>
        <Display lionsScore={lionsScore} tigersScore={tigersScore} quarter={quarter}/>
        <Dashboard lionsScore={lionsScore}
          setLionsScore={setLionsScore} 
          tigersScore={tigersScore}
          setTigersScore={setTigersScore} 
          addTouchdown={addTouchdown}
          quarter={quarter} 
          setQuarter={setQuarter}/>
        <footer>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
    </div>
  );
}

export default App;
