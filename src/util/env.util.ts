import zod from "zod";
import { config } from 'dotenv';

config();

const envSchema = zod.object({
    PORT: zod.coerce.number({
        message: "Port must be a number"
    }).min(0).max(65536)
});

export default envSchema.parse(process.env);