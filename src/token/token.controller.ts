import { Controller } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('api/token')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  async createAccseToken(): Promise<string> {
    return this.tokenService.createAccseToken();
  }

  async createRefreshToken(): Promise<string> {
    return this.tokenService.createRefreshToken();
  }

  async validateAccseToken(): Promise<boolean> {
    return this.tokenService.validateAccseToken();
  }

  async validateRefreshToken(): Promise<boolean> {
    return this.tokenService.validateRefreshToken();
  }
}
