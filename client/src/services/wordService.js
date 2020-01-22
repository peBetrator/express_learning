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
}
