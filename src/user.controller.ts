import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserService } from './user.service';


@Controller('/api/user')
export class UserController {
  constructor(private userController: UserService) {}
  
  @Get()
  async getUsers(): Promise<UserModel[]>{
    return this.userController.getAll()
  }

  @Get(':id')
  async getOneUser(@Param() params): Promise<UserModel> {
    return this.userController.getOne(params.id)
  }

  @Post()
  async createUser(@Body() user: UserModel) {
    return this.userController.postUser(user)
  }

  @Delete(':id')
  async deleteUser(@Param() params) {
    return this.userController.delete(params.id)
  }

  @Patch(':id')
  async setUser(@Body() param: string, @Param() id: number){
    return this.userController.setUser(id, param)
  }
}