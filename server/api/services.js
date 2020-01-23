// data store for 86 000 english words
const wordsDictionary = require('./wordsDictionary.json');

function getRandomWord() {
  const words = Object.keys(wordsDictionary);
  const randomWord = words[parseInt(Math.random() * words.length)];

  return randomWord;
}

function wordExists(word = '') {
  return !!wordsDictionary[word];
}

function getDescription(word) {
  return wordsDictionary[word];
}

module.exports = app => {
  app.get('/api/word', (req, res) => {
    res
      .status(200)
      .type('application/json')
      .send(getRandomWord());
  });

  app.get('/api/description', (req, res) => {
    const word = req.query.word;

    if (wordExists(word)) {
      res
        .status(200)
        .type('application/json')
        .send(getDescription(word));
    } else {
      res.status(404).json({ error: 'No such word' });
    }
  });
};
