import { articleApi } from '../api/articleApi';
import { Article } from '../../domain/entities/Article';
import { IArticleRepository } from '../../domain/infrastructure/IArticleRepository';

export class ArticleRepository implements IArticleRepository {
  
    save(article: Article): Promise<Article> {
        return articleApi.save(article)
    }
  
  async getAll(): Promise<Article[]> {
    return articleApi.getAll();
  }

}