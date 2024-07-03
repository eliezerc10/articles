import { Article } from "../domain/entities/Article";
import { IArticleRepository } from "../domain/infrastructure/IArticleRepository";

export class SaveArticle {
    constructor(private articleRepository: IArticleRepository) {}

    async execute(article: Article): Promise<void> {
        await this.articleRepository.save(article);
    }
}