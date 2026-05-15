import z, { string } from "zod";
console.log("loaded")

export const signupSchema = z.object({
    name:z.string().min(3),
    email:z.string(),
    password:z.string().min(6)
})

export const blogSchema = z.object({
    title:string().min(1),
    content:string().min(1)
})

export type SignupInput = z.infer<typeof signupSchema>
export type BlogInput = z.infer<typeof blogSchema>