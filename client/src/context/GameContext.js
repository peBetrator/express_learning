import React, { createContext, useReducer } from 'react';
import gameReducer from './reducer';

const GameStateContext = createContext();
const GameDispatchContext = createContext();

const initState = {
  attempts: 0,
  isGame: false,
  isWin: false,
  isDefeat: false,
};

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initState);
  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

function useGameState() {
  const context = React.useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a ContextProvider');
  }
  return context;
}

function useGameDispatch() {
  const context = React.useContext(GameDispatchContext);
  if (context === undefined) {
    throw new Error('useGameDispatch must be used within a ContextProvider');
  }
  return context;
}

function useGameContext() {
  return [useGameState(), useGameDispatch()];
}

export { ContextProvider, useGameContext };
