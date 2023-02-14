import {deleteUser, getAllUsers, getUser, updateUser, } from '../controllers/user.js'

import express  from "express";
import { verifyToken } from '../authorization.js';
const router = express.Router()

router.put('/:id', verifyToken, updateUser)
router.get('/find/:id', getUser)
router.get('/', getAllUsers)
router.delete('/:id',verifyToken, deleteUser)


export default router
