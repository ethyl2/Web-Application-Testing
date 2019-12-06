import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
//import { addTouchdown } from './helpers/addTouchdown';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [inning, setInning] = useState(1);

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const [outs, setOuts] = useState(0);
  const [runs, setRuns] = useState(0);
  const [bases, setBases] = useState(0);
  const [message, setMessage] = useState('Play Ball!');

  if (inning > 9) {
    setInning(1);
  }

  const reset = () => {
    console.log('Time to reset');
    setBalls(0);
    setStrikes(0);
  }

  const handleStrike = () => {
    console.log('strike!');
    setMessage('Strike!');
    setStrikes(strikes + 1);
    if (strikes === 2) {
      reset();
      setOuts(outs + 1);
    }
    if (outs > 5) {
      handleInning();
    }
  }

  const handleBall = () => {
    console.log('ball!');
    setMessage('Ball');
    setBalls(balls + 1);
    if (balls === 3) {
      reset();
    }
  }

  const handleFoul = () => {
    console.log('foul!');
    setMessage('Foul');
    if (strikes === 0) {
      setStrikes(1);
    } else if (strikes === 1) {
      setStrikes(2);
    }
  }

  const handleHit = () => {
    console.log('hit!');
    const type = Math.floor(Math.random() * 5);
    console.log(type);
    if (type === 0) {
      setMessage('Player doesn\'t make it to first base and is out.');
    } else if (type === 1) {
      setMessage('Player makes it to first base.');
    } else if (type === 2) {
      setMessage('Player scores a double and makes it to second base.');
    } else if (type === 3) {
      setMessage('Player scores a triple and makes it to third base!');
    } else {
      setMessage('Home run!');
      setRuns(runs + 1);
    }
    setBases(bases + 1);
    reset();
  }

  const handleInning = () => {
    setInning(inning + 1);
    reset();
    setOuts(0);
    setRuns(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Baseball Scoreboard</h1>
        </header>
        <Display lionsScore={lionsScore} 
          tigersScore={tigersScore} 
          inning={inning} 
          balls={balls} 
          strikes={strikes} 
          outs={outs}
          runs={runs}
          />

        {message? <h3>{message}</h3>: null}

        <Dashboard 
          inning={inning} 
          handleInning={handleInning}
          
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
