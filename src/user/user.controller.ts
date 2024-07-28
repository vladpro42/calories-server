import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/userDto';

@Controller('api')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(
      createUserDto.email,
      createUserDto.password,
    );
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
