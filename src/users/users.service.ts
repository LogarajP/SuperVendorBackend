import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private prisma:PrismaService){} // Dependency Injection
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data:createUserDto});
  }

  // findAll() {
  //   return `This action returns all users`;
  // }
  async findAll() {
    console.log("get")
    //const prisma = new PrismaClient();
    try {
      const users =await this.prisma.user.findMany(); // Replace 'user' with the actual name of your table
      return users;
    } catch (error) {
      throw new Error(`Unable to fetch users: ${error.message}`);
    }
      // } finally {
    //   await this.prisma.$disconnect();
    // }
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
}
