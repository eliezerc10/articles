import { Schema } from "mongoose";
import { Article } from "../../entities/Article";
import { IArticleRepository } from "../../repository/IArticleRepository";

const schema = require('../models/ArticleSchema')

export class ArticleRepository implements IArticleRepository {
    
    async save(article: Article): Promise<Article> {
        const articleNew = new schema(article);

        const savedArticle = await articleNew.save();
        return savedArticle;
    }

    async getAll(): Promise<Article[]> {
        const articles = await schema.find().exec();
        return articles.map((article:any) => new Article(article.author, article.title, article.description, 
            article.url, article.urlToImage, article.publishedAt));
    }
    
  }