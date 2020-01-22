import React, { useEffect, useReducer } from 'react';

import { useGameContext } from '../context/GameContext';
import { GAME_LOST, WRONG_GUESS } from '../context/types';

import { getLetters, guessLetter } from '../services/utils';
import WordService from '../services/wordService';

import Attempts from './Attempts';
import Input from './Input';
import Letters from './Letters';

function Word() {
  const [context, dispatch] = useGameContext();

  const [state, setState] = useReducer(
    (state, details) => ({
      ...state,
      ...details,
    }),
    { word: '', letters: [], failedLetters: [] }
  );

  useEffect(() => {
    getWord();
  }, []);

  async function getWord() {
    const word = new WordService();

    await word.getWord();
    const letters = getLetters(word.result);
    console.log('word : ', word);

    setState({ word: word.result, letters });
  }

  const wrongGuess = () => {
    const { attempts } = context;

    dispatch({ type: attempts > 3 ? GAME_LOST : WRONG_GUESS });
  };

  const handleLetterGuess = letter => {
    const { failedLetters, letters } = state;
    const newObj = guessLetter(letter, letters);

    if (newObj) {
      setState({ letters: newObj });
    } else {
      wrongGuess();
      setState({ failedLetters: [...new Set([...failedLetters, letter])] });
    }
  };

  return (
    <div>
      {!state.word && (
        <div className="centered">
          <h2>Loading ...</h2>
        </div>
      )}
      <Letters letters={state.letters} />
      <Attempts letters={state.failedLetters} />
      <Input onGuess={handleLetterGuess} />
    </div>
  );
}

export default Word;
