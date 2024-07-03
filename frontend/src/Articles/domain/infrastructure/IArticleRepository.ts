import { Article } from "../entities/Article";

export interface IArticleRepository {
  save(article: Article): Promise<Article>;
  getAll(): Promise<Article[]>;
  
}