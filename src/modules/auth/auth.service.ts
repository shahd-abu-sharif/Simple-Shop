import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO, RegisterDTO, UserResponseDTO } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { removeFields } from 'src/utils/object.util';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'generated/prisma';
import * as argon from 'argon2'

@Injectable()
export class AuthService {

  constructor (
     private userService : UserService , 
     private jwtService : JwtService 
    ){}

  // * Register a new user account.
  //  *
  //  * Expected flow(implementation TBD):
  //  * 1) Hash the incoming password.
  //  * 2) Persist the user record with the hashed password.
  //  * 3) Generate a JWT access token for the new user.
  //  * 4) Return the sanitized user data alongside the token.
  //  */

   async register(registerDTO: RegisterDTO): Promise<UserResponseDTO> {
    // TODO ; implement registration logic
    //* 1- hash the password 
    const hashedPassword =  await this.hashedPassword(registerDTO.password)

    //* 2- store user with hashed password in db
    const createUser = await this.userService.create({ ...registerDTO, password : hashedPassword })
    // const createdUserWithoutPassword = removeFields(createUser , ['password'])
    
    //* 3- generate jwt token
    const token = this.generateJWTToken(createUser.id , createUser.role)

    //* 4- return user data + token 
    return {
      // user : createdUserWithoutPassword ,
      user : this.userService.mapUserWithoutPassword(createUser) ,
      token ,
    }

  //   *
  //  * Authenticate an existing user and return their data + token.
  //  *
  //  * Expected flow(implementation TBD):
  //  * 1) Look up the user by identifier(email / username).
  //  * 2) Verify the provided password against the stored hash.
  //  * 3) Generate a JWT access token.
  //  * 4) Return the sanitized user data alongside the token.
  //  */


  }


  async login(loginDTO: LoginDTO): Promise<UserResponseDTO> {
    // TODO implement login logic 

    // * 1- find user by email
    const foundUser= await this.userService.findByEmailOrThrow(loginDTO.email)

    // * 2- check (verify) password with argon
    const isPasswordValid = await this.verifyPassword(loginDTO.password, foundUser.password)
    // !throw error if not match
    if(!isPasswordValid) {
      throw new UnauthorizedException('invalid cridentials') // this is 401 built-in nest exception
    }

    // * 3- generate jwt token
    const token = this.generateJWTToken(foundUser.id, foundUser.role)

    // * 4- return user data + token
    // const foundUserWithoutPassword   = removeFields(foundUser , ['password'])
    return { 
      // user : foundUserWithoutPassword , 
      // user: removeFields(foundUser, ['password']) ,
      user : this.userService.mapUserWithoutPassword(foundUser),
      token
    }

  }


// * everyime the user login , it will update his token and the exp time
  validate ( userPayload : UserResponseDTO['user']){
    const token = this.generateJWTToken(userPayload.id, userPayload.role)

    return {
      user: userPayload,
      token
    }

  }

  /**
   * Hash a plain-text password before persistence.
   *
   * Keep the hashing algorithm and salt rounds centralized here so the
   * registration and password-change flows stay consistent.
   */

  //  we will alwasy make these methods 
  private hashedPassword(password: string) { 
    return argon.hash(password)

  }

  private  verifyPassword(password : string , hashedPassword : string ){
    return argon.verify(hashedPassword , password)
  }


  private generateJWTToken(userId:bigint , role : UserRole){
   return  this.jwtService.sign({sub : userId , role } , {
      expiresIn : '30d' // 30 days
    })
  }


  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}













