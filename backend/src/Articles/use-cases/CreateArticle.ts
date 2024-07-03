import { Article } from "../entities/Article";
import { IArticleRepository } from "../repository/IArticleRepository";

export class createArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(author: string, title: string, 
    description: string, url:string, urlToImage:string, publishedAt:string): Promise<Article> {

    const article = new Article(author, title, description, url, urlToImage, publishedAt)
    return this.articleRepository.save(article);
  }
}