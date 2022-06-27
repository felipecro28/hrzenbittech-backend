import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel
  ){}

  async getAll(): Promise<UserModel[]> {
    return this.userModel.findAll()
  }

  async getOne(id: number): Promise<UserModel> {
    return this.userModel.findByPk(id)
  }

  async postUser(user: UserModel) {
    this.userModel.create(user)
  }

}
