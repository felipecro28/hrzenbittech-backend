import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserModel>,
  )

  @Get()
  getUser(): Promise<UserModel[]> {
    return this.userRepository.find();
  }
  }

  @Get(':id')
  getOneUser(@Param() params): string {
    return `A specific user ${params.id}`
  }

  @Post()
  createUser(@Body() user) : string {
    console.log(user)
    return 'A user was created.'
  }

  @Patch()
  changeUser(@Body() user) : string {
    console.log(user)
    return 'User changed.'
  }

  @Delete(':id')
  deleteUser(@Param() param) : string{
    return 'User ${param.id} deleted'
  }
}