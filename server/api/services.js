// data store for 86 000 english words
const wordsDictionary = require('./wordsDictionary.json');

function getRandomWord() {
  const words = Object.keys(wordsDictionary);
  const randomWord = words[parseInt(Math.random() * words.length)];

  return randomWord;
}

module.exports = app => {
  app.get('/api/word', (req, res) => {
    res
      .status(200)
      .type('application/json')
      .send(getRandomWord());
  });
};
