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

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const [outs, setOuts] = useState(0);

  if (quarter > 9) {
    setQuarter(1);
  }

  const reset = () => {
    console.log('Time to reset');
    setBalls(0);
    setStrikes(0);
  }

  const handleStrike = () => {
    console.log('strike!');
    setStrikes(strikes + 1);
    if (strikes === 2) {
      reset();
    }
  }

  const handleBall = () => {
    console.log('ball!');
    setBalls(balls + 1);
    if (balls === 3) {
      reset();
    }
  }

  const handleFoul = () => {
    console.log('foul!');
    if (strikes === 0) {
      setStrikes(1);
    } else if (strikes === 1) {
      setStrikes(2);
    }
  }

  const handleHit = () => {
    console.log('hit!');
    reset();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Baseball Scoreboard</h1>
        </header>
        <Display lionsScore={lionsScore} tigersScore={tigersScore} quarter={quarter} balls={balls} strikes={strikes} outs={outs}/>
        <Dashboard 
          quarter={quarter} 
          setQuarter={setQuarter}
          
          handleBall={handleBall}
          handleStrike={handleStrike}
          handleFoul={handleFoul}
          handleHit={handleHit}
          
          />
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
