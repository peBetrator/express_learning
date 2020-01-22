export const getLetters = word => {
  const letters = word.split('').map((letter, i) => ({
    letter: letter.toUpperCase(),
    guessed: false,
  }));

  return letters;
};

export const guessLetter = (symbol, letters) => {
  let isGuessed = false;
  const newObj = letters.map(({ letter, guessed }) => {
    if (!isGuessed && letter === symbol) {
      isGuessed = true;
    }

    return {
      letter,
      guessed: guessed || letter === symbol,
    };
  });

  return isGuessed ? newObj : false;
};
