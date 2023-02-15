import {deleteUser, getAllUsers, getUser, updateUser, } from '../controllers/user.js'

import express  from "express";
const router = express.Router()

router.put('/:id', updateUser)
router.get('/find/:id', getUser)
router.get('/', getAllUsers)
router.delete('/:id', deleteUser)


export default router
