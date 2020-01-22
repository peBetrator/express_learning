import React from 'react';
import Game from './Game';

import { ContextProvider } from '../context/GameContext';

function App() {
  return (
    <ContextProvider>
      <Game />
    </ContextProvider>
  );
}

export default App;
