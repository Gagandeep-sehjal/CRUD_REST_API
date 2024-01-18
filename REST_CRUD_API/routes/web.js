import express from "express";
import stucontroller from '../controllers/stucontroller.js'
const router=express.Router();

router.get('/',stucontroller.getalldoc)
router.post('/',stucontroller.createdoc)
router.get('/:id',stucontroller.getdocid)
router.put('/update/:id',stucontroller.updatedoc)
router.delete('/delete/:id',stucontroller.deletedoc)

export default router  