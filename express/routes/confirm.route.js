import express from 'express';
import { adminUser, publicUser } from '../controllers/confirm.controller.js';

const router = express.Router();

router.get("/adminUser" , adminUser); 

router.get("/publicUser" , publicUser); 
 

export default router;  