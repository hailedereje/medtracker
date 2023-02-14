import express  from "express";
import { addRoom, deleteARoom, getAllRooms, getARoom, updateRoom } from "../controllers/room.js";
const router = express.Router()
router.post('/', addRoom)
router.put('/:id', updateRoom)
router.get('/find/:id', getARoom)
router.get('/', getAllRooms)
router.delete('/:id', deleteARoom)



export default router
