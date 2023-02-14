import {addMedicine, deleteMedicine, getMedicine } from '../controllers/allergy.js'

import express  from "express";
const router = express.Router()
router.post('/', addMedicine)
router.get('/:userId', getMedicine)
router.post('/id', deleteMedicine)



export default router
