import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserService } from './user.service';


@Controller('/api/user')
export class UserController {
  constructor(private userController: UserService) {}
  
  @Get()
  getUsers(): Promise<UserModel[]>{
    return this.userController.getAll()
  }

  @Post()
  createUser(user: UserModel) {
    return this.userController.postUser(user)
  }
}