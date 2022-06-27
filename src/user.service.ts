import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { json } from 'sequelize';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}

  async getAll(): Promise<UserModel[]> {
    return this.userModel.findAll();
  }

  async getOne(id: number): Promise<UserModel> {
    return this.userModel.findByPk(id);
  }

  async postUser(user: UserModel) {
    this.userModel.create(user);
  }

  async delete(id: number) {
    const user: UserModel = await this.getOne(id);
    user.destroy();
  }

  async setUser(id: number, body: object){
    const user: UserModel = await this.getOne(id)
    user.update(body)
  }
  }
