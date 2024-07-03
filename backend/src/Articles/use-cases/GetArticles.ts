
import { Article } from '../entities/Article';
import { IArticleRepository } from '../repository/IArticleRepository';

export class GetArticles {
  constructor(private articleRepository: IArticleRepository) {}
  async execute(): Promise<Article[]> {
    return await this.articleRepository.getAll();
  } 
}