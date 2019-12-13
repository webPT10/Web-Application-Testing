import React, { useState } from 'react';
import './App.css'

import Dashboard from './components/Dashboard';
import Display from './components/Display';


function App() {
  const useInput = (key, initialValorem) => {
    const [value, setValue] = useState(initialValorem);
    return [value, setValue]
  }

  //BALLS
  const [ball, setBall] = useInput('ball', 0);
  const ballChanges = () => {
    if (ball === 3) {
      resetAll();
    } else {
      setBall(ball + 1)
    }
  }

  //STRIKES
  const [strike, setStrike] = useInput('strike', 0);
  const strikeChanges = () => {
    if (strike === 2) {
      resetAll();
    } else {
      setStrike(strike + 1)
    }
  }

  //HITS
  const[hit, setHit] = useInput('hit', 0);
  const hitChanges = () => {
    resetAll();
  }

  //FOULS
  const [foul, setFoul] = useInput('foul', 0);
  const foulChanges = () => {
    if (strike === 0) {
      setStrike(1);
    } else if (strike === 1){
      setStrike(2)
    }
    setFoul(foul + 1)
  }

  //RESET
  const resetAll = () => {
    setBall(0);
    setHit(0);
    setStrike(0);
    setFoul(0);
  }

  return (
    <div className="App">
      <Display 
        ball={ball} 
        strike={strike} 
        foul={foul} 
        hit={hit} 
      /> 
      <Dashboard 
        ballChanges={ballChanges} 
        strikeChanges={strikeChanges} 
        hitChanges={hitChanges} 
        foulChanges={foulChanges}
      /> 
    </div>
  );
}

export default App;
