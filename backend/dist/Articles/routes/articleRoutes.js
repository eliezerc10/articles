"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ArticleController_1 = require("../controllers/ArticleController");
const ArticleRepository_1 = require("../infrastructure/repositories/ArticleRepository");
const repository = new ArticleRepository_1.ArticleRepository();
const controller = new ArticleController_1.ArticleController(repository);
const articleRoutes = express_1.default.Router();
articleRoutes.get("/", controller.onGetAll);
articleRoutes.post("/", controller.onCreateArticle);
exports.default = articleRoutes;
