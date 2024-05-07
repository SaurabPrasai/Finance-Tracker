import express from "express"
import { deleteRecord, getAllRecord, postRecord, updateRecord } from "../controllers/financialRecordController.js";


const router=express.Router();

router.get('/getallrecord/:userId',getAllRecord);

router.post('/saverecord',postRecord);

router.put('/update/:id',updateRecord);

router.delete('/delete/:id',deleteRecord);

export default router;