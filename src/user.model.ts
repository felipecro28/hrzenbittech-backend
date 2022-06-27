import { Model, Table, Column, DataType } from 'sequelize-typescript';


@Table
export class UserModel extends Model<UserModel> {
  @Column({ type: DataType.STRING, allowNull: false})
  name: string;

  @Column({ type: DataType.STRING, allowNull: false})
  email: string;

  @Column({ type: DataType.STRING, allowNull: false})
  message: string;

}