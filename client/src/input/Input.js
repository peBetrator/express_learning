import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letter: '',
    };
  }

  handleLetterChange = e => {
    const data = e.target.value;
    const letter = data.substr(data.length - 1).toUpperCase();

    this.setState({ letter });
  };

  handleKeyPress = e => {
    const { onGuess } = this.props;
    const { letter } = this.state;
    if (e.key === 'Enter') {
      onGuess(letter);
      this.setState({ letter: '' });
    }
  };

  render() {
    const { letter } = this.state;

    return (
      <input
        className="input__letter"
        value={letter}
        onChange={this.handleLetterChange}
        onKeyDown={this.handleKeyPress}
      />
    );
  }
}
