import envSchema  from './util/env.util';
import express, { response } from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(envSchema.PORT, () =>{
    console.log('Server started.');
});

console.log(envSchema.PORT);