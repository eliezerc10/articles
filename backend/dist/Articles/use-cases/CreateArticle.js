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
exports.createArticle = void 0;
const Article_1 = require("../entities/Article");
class createArticle {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    execute(author, title, description, url, urlToImage, publishedAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = new Article_1.Article(author, title, description, url, urlToImage, publishedAt);
            return this.articleRepository.save(article);
        });
    }
}
exports.createArticle = createArticle;
