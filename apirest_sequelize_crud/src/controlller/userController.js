 import { User } from "../models/user.js";
 
 export const createUser = async(req, res) => {
 
     try {
         const {name, email, password} = req.body
 
         const user = await User.create({
             name,
             email,
             password
         })
         return res.status(200).json(user)
 
     } catch (error) {
         console.log(error)
         res.status(400).json({message: 'ha ocurrido un problema en la creacion del user'})
     }
 }
 
 export const updateUser = async(req, res) => {
     try {
         const {id} = req.params
         const {name, email, password} = req.body
         const user = await User.update(
             {
                 name,
                 email,
                 password
             },
             {
                 where:{
                     id:id
                 }
             }
         )
         if (user === 0){
             return res.status(400).json({message: "user no disponible"})
         }
         return res.status(200).json(user)
 
 
     } catch (error) {
         console.log(error)
         res.status(400).json({message: "ha ocurrido un problema con la actualizacion del user"})
     }
 }
 
 export const deleteUser = async(req, res) => {
     try {
         const {id} = req.params
         const userToDelete = await User.findByPk(id);
         const user = await User.destroy({
             where:{
                 id:id
             } 
         })
         if (user === 0){
             return res.status(400).json({message: "user no disponible"})
         }
         return res.status(200).json({message:  `usuario eliminado: ${userToDelete.name}`})
         
     } catch (error) {
         console.log(error)
         res.status(400).json({message: "ha ocurrido un problema con el borrado del user"})
     }
 }
 
 export const getUsers = async(req, res) => {
     try {
         
         const user = await User.findAll()
         if (user.length === 0){
             return res.status(400).json({message: "no existe datos a mostar"})
         }
         return res.status(200).json(user)
         
     } catch (error) {
         console.log(error)
         res.status(400).json({message: "ha ocurrido un problema al mostrar el user"})
     }
 }