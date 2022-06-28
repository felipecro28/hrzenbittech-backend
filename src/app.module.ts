import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';
import 'dotenv/config'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      autoLoadModels: true,
      models: [UserModel],
    }),
    SequelizeModule.forFeature([UserModel])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
