import { IArticleRepository } from "../domain/infrastructure/IArticleRepository";

export class GetArticles {
  private articleRepository: IArticleRepository;

  constructor(articleRepository: IArticleRepository) {
    this.articleRepository = articleRepository;
  }

  async execute() {
    return this.articleRepository.getAll();
  }
}