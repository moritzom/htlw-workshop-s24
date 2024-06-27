import express from "express";
import { createUserSchema } from "../schema/user.schema";

const router = express.Router();

router.get('/', (request, response) =>{
    response.status(200).send("hello world user");
});

router.post('/', (req, res) =>{
    const validated = createUserSchema.safeParse(req.body);

    if(validated.success){
        res.status(200).json(req.body);
    
    }else{
        res.status(400).json({
            error: "Malfromed request body"
        })
    }

    /**
     * We're expecting the following body:
     * {
     *  username: string,
     *  email: string,
     *  password: string
     * }
     */

    console.log(req.body);

    res.status(200).json(req.body);
})

export default router;