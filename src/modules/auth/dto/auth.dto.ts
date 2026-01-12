// ? always start with DTO


import { User } from "generated/prisma";

export type RegisterDTO = Omit<User, 'id' | 'createdAt'>  // “When registering, accept everything a User has except id and createdAt.”

export type UserResponseDTO = {
    user : Omit<User, 'password' > ,
    token: string
}

export type LoginDTO = {
    email: string,
    password: string
}

