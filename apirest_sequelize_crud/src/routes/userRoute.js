import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controlller/userController.js";

const router = Router()
router.post('/createUser', createUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/getUsers', getUsers)

export default router
