
import axios from 'axios';
import { Article } from '../../domain/entities/Article';

export const articleApi = {
  async getAll(): Promise<Article[]> {
    const response = await axios.get('//localhost:8000/articles');
    return response.data;
  },

  async save(article: Article): Promise<Article> {
    const response = await axios.post('//localhost:8000/articles', article);
    return response.data
  }

};