import {addMedicine, deleteMedicine, getMedicine } from '../controllers/medicine.js'

import express  from "express";
const router = express.Router()
router.post('/', addMedicine)
router.get('/:userId', getMedicine)
router.post('/id', deleteMedicine)



export default router
