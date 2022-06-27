import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'us-cdbr-east-05.cleardb.net',
      port: 3306,
      username: 'bb5486777b84e4',
      password: '97eab81a',
      database: 'heroku_a103919a812fae9',
      synchronize: true,
      models: [UserModel],
    }),
    SequelizeModule.forFeature([UserModel])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
