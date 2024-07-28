import { Injectable } from '@nestjs/common';
import { Users } from './entities/User';
import { AppDataSource } from 'src/data-source';
import { hashPassword } from 'src/common/hashPassword';

@Injectable()
export class UserService {
  async createUser(email: string, password: string): Promise<Users> {
    const newUser = new Users();

    newUser.email = email;
    newUser.password = hashPassword(password);

    await AppDataSource.manager.save(newUser);

    return newUser;
  }

  async loginUser() {
    return 's';
  }
}
