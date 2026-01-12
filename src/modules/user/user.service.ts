import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterDTO, UserResponseDTO } from '../auth/dto/auth.dto';
import { DatabaseService } from '../database/database.service';
import { User } from 'generated/prisma';
import { removeFields } from 'src/utils/object.util';

@Injectable()
export class UserService {

  constructor ( private prismaService : DatabaseService){}

  create(registerDTO: RegisterDTO) {
    return this.prismaService.user.create({
      data: registerDTO, // id , createdAt has default values in db
    })
    
  }

  findByEmailOrThrow(email:string){
    return this.prismaService.user.findUniqueOrThrow({
      where : {email}
    })
  }
        
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  mapUserWithoutPassword(user : User) : UserResponseDTO['user'] {
    return removeFields(user, ['password'] )
  }
}
