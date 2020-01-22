import React from 'react';
import GameContext from '../context/GameContext';

const WithGameContext = Component => {
  return props => (
    <GameContext.Consumer>
      {context => <Component {...props} context={context} />}
    </GameContext.Consumer>
  );
};

export default WithGameContext;
