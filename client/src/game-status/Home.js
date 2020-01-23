import React from 'react';
import { useGameContext } from '../context/GameContext';
import { START_GAME } from '../context/types';
import Defeat from './Defeat';
import './gameStatus.css';

function Home() {
  const [state, dispatch] = useGameContext();

  const handleStartGame = () => {
    dispatch({ type: START_GAME });
  };

  const { isDefeat, isWin } = state;
  return (
    <div className="game__button">
      {isDefeat && <div>You Lost. Start Again ?</div>}
      {isWin && <div>You guessed. Congrants !</div>}
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default Home;
