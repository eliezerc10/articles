"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const GetArticles_1 = require("../use-cases/GetArticles");
const CreateArticle_1 = require("../use-cases/CreateArticle");
class ArticleController {
    constructor(repository) {
        this.onCreateArticle = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { author, title, description, url, urlToImage, publishedAt } = req.body;
                const savedArticle = this.createArticle.execute(author, title, description, url, urlToImage, publishedAt);
                res.status(201).json(savedArticle);
            }
            catch (error) {
                res.status(400).json({ error: error.message})
            }
        });
        this.onGetAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const data = yield this.getArticles.execute();
                return res.status(200).json(data);
            }
            catch (error) {
                res.status(400).json({ error: error.message})
            }
        });
        this.repository = repository;
        this.getArticles = new GetArticles_1.GetArticles(repository);
        this.createArticle = new CreateArticle_1.createArticle(repository);
    }
}
exports.ArticleController = ArticleController;