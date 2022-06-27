import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserModel } from './user.model';

@Controller('user')
export class UserController {

  @Get()
  getUser(): string {
    return 'user created'
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