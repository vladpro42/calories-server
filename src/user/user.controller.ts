import { Body, Controller, Post, Response } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/userDto';
import { TokenUtils } from 'src/token/token.utils';
import { Response as Res } from 'express';

@Controller('api')
export class UserController {
  constructor(private userService: UsersService) {}
  @Post('create')
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Response({ passthrough: true }) res: Res,
  ) {
    const accessToken = TokenUtils.createAccessToken(createUserDto.email);
    const refreshToken = TokenUtils.createRefreshToken(createUserDto.email);
    const user = await this.userService.createUser(
      createUserDto.email,
      createUserDto.password,
    );
    res.header('Authorization', `Bearer ${accessToken}`);
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    return user;
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return await this.userService.loginUser(
      loginUserDto.email,
      loginUserDto.password,
    );
  }

  @Post('logout')
  async logoutUser() {
    return 's';
  }
}
