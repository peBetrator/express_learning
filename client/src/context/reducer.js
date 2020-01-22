import * as types from './types';

const initState = {
  attempts: 0,
  isGame: false,
  isWin: false,
  isDefeat: false,
};

export default (state, action) => {
  switch (action.type) {
    case types.START_GAME: {
      return { ...state, ...initState, isGame: true };
    }
    case types.WRONG_GUESS: {
      return { ...state, attempts: ++state.attempts };
    }
    case types.GAME_LOST: {
      return { ...state, isGame: false, isDefeat: true };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
