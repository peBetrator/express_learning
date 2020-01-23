import React, { useEffect, useState } from 'react';
import WordService from '../services/wordService';

function Description(props) {
  const [desc, setDesc] = useState('');

  useEffect(() => {
    getWordDescription();
  }, [props.word]);

  async function getWordDescription() {
    const { word } = props;
    // TODO: implement singleton for service class
    const wordService = new WordService();

    await wordService.getWordDescription(word);
    setDesc(wordService.result);
  }

  return <div>{desc}</div>;
}

export default Description;
