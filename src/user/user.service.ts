import { Injectable } from '@nestjs/common';
import { Users } from './entities/User';
import { hashPassword, validatePassword } from 'src/common/hashPassword';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async createUser(email: string, password: string): Promise<Users> {
    const newUser = this.userRepository.create();

    newUser.email = email;
    newUser.password = hashPassword(password);

    await this.userRepository.save(newUser);

    return newUser;
  }

  async loginUser(email: string, password: string): Promise<Users> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Неверный пароль или логин');
    }

    const isValidPassword = validatePassword(password, user.password);

    if (!isValidPassword) {
      throw new Error('Неверный пароль или логин');
    }

    // generate access token

    return user;
  }
}
