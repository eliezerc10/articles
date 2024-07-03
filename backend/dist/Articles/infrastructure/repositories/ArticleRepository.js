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
exports.ArticleRepository = void 0;
const Article_1 = require("../../entities/Article");
const schema = require('../models/ArticleSchema');
class ArticleRepository {
    save(article) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleNew = new schema(article);
            const savedArticle = yield articleNew.save();
            return savedArticle;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield schema.find().exec();
            return articles.map((article) => new Article_1.Article(article.author, article.title, article.description, article.url, article.urlToImage, article.publishedAt));
        });
    }
}
exports.ArticleRepository = ArticleRepository;
