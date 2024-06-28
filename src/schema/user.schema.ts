import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
    body: object({
        username: string({ message: "username is required " }).min(3).max(40),
        email: string({ message: "email is required" }).email("please enter a valid email"),
        password: string({ message: "password required "}).min(8).max(255)
    })
});

export const getUserSchema = object({
    params: object({
        id: string({
            message: "UserId is required!"
        })
    })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type GetUserInput = TypeOf<typeof getUserSchema>;