import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Tanasha@1987',
      database: 'CMS',
      synchronize: true
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
