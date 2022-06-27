import { Model, Table, Column, DataType } from 'sequelize-typescript';


@Table
export class UserModel extends Model<UserModel> {
  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  message: string;

}