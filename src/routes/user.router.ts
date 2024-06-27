import express from "express";
import { createUserHandler } from "../controller/user.controller"

const router = express.Router();

router.get('/', (request, response) =>{
    response.status(200).send("hello world user");
});

router.post('/', createUserHandler);

export default router;