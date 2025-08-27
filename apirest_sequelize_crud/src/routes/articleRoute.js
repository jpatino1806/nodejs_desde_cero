import { Router } from "express";
import { createArticle, deleteArticle, getArticles, updateArticle } from "../controlller/articleController.js";

const router = Router()
router.post('/createArticle', createArticle)
router.put('/updateArticle/:id', updateArticle)
router.delete('/deleteArticle/:id', deleteArticle)
router.get('/getArticles', getArticles)

export default router
