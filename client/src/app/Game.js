import React, { Component } from 'react';
import GameContext from '../context/GameContext';
import Home from '../game-status/Home';
import Word from '../input';
import Hangman from '../poor-guy';
import './game.css';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attempts: 0,
      isGame: false,
      isWin: false,
      isDefeat: false,
    };
  }

  startGame = () => {
    this.setState({ attempts: 0, isGame: true, isWin: false, isDefeat: false });
  };

  attemptDone = () => {
    this.setState(({ attempts }) =>
      attempts > 3
        ? { isGame: false, isDefeat: true }
        : { attempts: ++attempts }
    );
  };

  render() {
    const { isGame } = this.state;

    return (
      <GameContext.Provider
        value={{
          state: this.state,
          wrongGuess: this.attemptDone,
          startGame: this.startGame,
        }}
      >
        {this.state.attempts}
        <Hangman />
        {isGame ? <Word /> : <Home />}
      </GameContext.Provider>
    );
  }
}

export default Game;
