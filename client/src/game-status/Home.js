import React from 'react';
import withGameContext from '../hoc/withGameContext';
import Defeat from './Defeat';
import './gameStatus.css';

function Home(props) {
  const { startGame } = props.context;
  const { isDefeat, isWin } = props.context.state;

  const handleStartGame = () => {
    startGame();
  };

  return (
    <div className="game__button">
      {isDefeat && <div>You Lost. Start Again ?</div>}
      {isWin && <div>Congrants</div>}
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default withGameContext(Home);
