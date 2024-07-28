import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/User';

@Module({
  controllers: [UserController],
  exports: [],
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
})
export class UserModule {}
