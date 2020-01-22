import React, { Component } from 'react';
import Input from './Input';
import Letters from './Letters';
import Attempts from './Attempts';
import WordService from '../services/wordService';
import WithGameContext from '../hoc/withGameContext';
import { getLetters, guessLetter } from '../services/utils';

class Word extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      letters: [],
      failedLetters: [],
    };

    this.getWord();
  }

  getWord = async () => {
    const word = new WordService();

    await word.getWord();
    console.log('word : ', word);
    const letters = getLetters(word.result);
    this.setState({ word: word.result, letters });
  };

  handleLetterGuess = letter => {
    const { wrongGuess } = this.props.context;

    this.setState(({ letters, failedLetters }) => {
      const newObj = guessLetter(letter, letters);
      if (newObj)
        return {
          letters: newObj,
        };
      else {
        wrongGuess();
        return {
          failedLetters: [...new Set([...failedLetters, letter])],
        };
      }
    });
  };

  render() {
    const { letters, failedLetters, word } = this.state;
    if (!word)
      return (
        <div className="centered">
          <h2>Loading ...</h2>
        </div>
      );

    return (
      <div>
        <Letters letters={letters} />
        <Attempts letters={failedLetters} />
        <Input onGuess={this.handleLetterGuess} />
      </div>
    );
  }
}

export default WithGameContext(Word);
