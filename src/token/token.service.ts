import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  async createAccseToken(): Promise<string> {
    return 'access_token';
  }

  async createRefreshToken(): Promise<string> {
    return 'refresh_token';
  }

  async validateAccseToken(): Promise<boolean> {
    return true;
  }

  async validateRefreshToken(): Promise<boolean> {
    return true;
  }
}
