import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserModel } from './user.model';

@Module({
  controllers: [UserController],
  providers: [UserService, UserModel],
})
export class UserModule {}
