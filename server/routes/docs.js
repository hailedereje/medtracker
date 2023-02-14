import {addDocs, deleteDocs, getDocs } from '../controllers/docs.js'

import express  from "express";
const router = express.Router()
router.post('/', addDocs)
router.get('/:userId', getDocs)
router.post('/id', deleteDocs)



export default router
