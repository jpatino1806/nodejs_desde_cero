import { Article } from "../models/article.js";

export const createArticle = async(req, res) => {

    try {
        const {title, description} = req.body

        const article = await Article.create({
            title,
            description
        })
        return res.status(200).json(article)

    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'ha ocurrido un problema en la creacion del articulo'})
    }
}

export const updateArticle = async(req, res) => {
    try {
        const {id} = req.params
        const {title, description} = req.body
        const article = await Article.update(
            {
                title,
                description
            },
            {
                where:{
                    id:id
                }
            }
        )
        if (article === 0){
            return res.status(400).json({message: "articulo no disponible"})
        }
        return res.status(200).json(article)


    } catch (error) {
        console.log(error)
        res.status(400).json({message: "ha ocurrido un problema con la actualizacion del articulo"})
    }
}

export const deleteArticle = async(req, res) => {
    try {
        const {id} = req.params
        const article = await Article.destroy({
            where:{
                id:id
            }
        })
        if (article === 0){
            return res.status(400).json({message: "articulo no disponible"})
        }
        return res.status(200).json({message: "Articulo eliminado"})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "ha ocurrido un problema con el barrado del articulo"})
    }
}

export const getArticles = async(req, res) => {
    try {
        
        const article = await Article.findAll()
        if (article.length === 0){
            return res.status(400).json({message: "no existe datos a mostar"})
        }
        return res.status(200).json(article)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "ha ocurrido un problema al mostrar los articulo"})
    }
}