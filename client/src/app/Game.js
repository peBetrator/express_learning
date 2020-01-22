import React from 'react';
import { useGameContext } from '../context/GameContext';
import Home from '../game-status/Home';
import Word from '../input';
import Hangman from '../poor-guy';
import './game.css';

function Game() {
  const [state] = useGameContext();

  const { attempts, isGame } = state;
  return (
    <>
      {attempts}
      <Hangman />
      {isGame ? <Word /> : <Home />}
    </>
  );
}

export default Game;
