import { NextFunction, Request, Response } from "express";
import { IArticleRepository } from "../repository/IArticleRepository";
import { GetArticles } from "../use-cases/GetArticles";
import { createArticle } from "../use-cases/CreateArticle";

export class ArticleController {

    private repository: IArticleRepository;
    private getArticles: GetArticles;
    private createArticle: createArticle

    constructor(repository: IArticleRepository) {
        this.repository = repository;
        this.getArticles = new GetArticles(repository);
        this.createArticle = new createArticle(repository)
    }
    
    onCreateArticle = async (req: Request, res: Response, 
        next: NextFunction) => {
            try {

                const { author, title, description, url, urlToImage, publishedAt} = req.body
            
                const savedArticle = this.createArticle.execute(author, title, description, url, urlToImage, publishedAt)

                res.status(201).json(savedArticle);
            } catch (error) {
                throw new Error('Error: ' + error)
            }
    }
    onGetAll = async (req: Request, res: Response, 
        next: NextFunction) => {
            try {
                const body = req.body
                
                const data = await this.getArticles.execute()

                return res.status(200).json(data)

            } catch (error) {
                throw new Error('Error: ' + error)
            }
    }
}