import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/User';

@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() body: IUser) {
    return await this.userService.createUser(body.email, body.password);
  }

  @Post('login')
  async loginUser() {
    return 's';
  }

  @Post('logout')
  async logoutUser() {
    return 's';
  }
}
