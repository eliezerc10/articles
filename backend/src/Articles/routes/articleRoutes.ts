import express from 'express'
import { ArticleController } from '../controllers/ArticleController'
import { ArticleRepository } from '../infrastructure/repositories/ArticleRepository'

const repository = new ArticleRepository()
const controller = new ArticleController(repository)

const articleRoutes = express.Router()
articleRoutes.get("/", controller.onGetAll)
articleRoutes.post("/", controller.onCreateArticle)
export default articleRoutes