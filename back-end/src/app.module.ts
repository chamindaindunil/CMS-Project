import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Tanasha@1987',
      database: 'CMS',
      entities: [Users],
      synchronize: true
    }),
    UsersModule
  ],
  // controllers: [AppController, UsersController],
  // providers: [AppService],
})
export class AppModule {}
