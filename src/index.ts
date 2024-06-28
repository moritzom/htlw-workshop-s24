import express, { response } from 'express';
import router from './routes';
import cors from 'cors';
import envUtil from './util/env.util';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", router);

app.listen(envUtil.PORT, async () =>{
    await mongoose.connect(envUtil.MONGO_URL);

    console.log('Connected to MongoDB.');

    console.log('Server started.');
});

console.log(envUtil.PORT);