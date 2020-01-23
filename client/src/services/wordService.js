import axios from 'axios';

export default class WordService {
  async getWord() {
    try {
      const res = await axios.get('/api/word');
      this.result = res.data;
    } catch (error) {
      alert(error);
    }
  }

  async getWordDescription(word) {
    try {
      if (word) {
        const res = await axios.get(`/api/description?word=${word}`);
        this.result = res.data;
      }
    } catch (error) {
      alert(error);
    }
  }
}
