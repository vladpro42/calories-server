import { sign } from 'jsonwebtoken';

export class TokenUtils {
  static createAccessToken(email: string) {
    const token = sign({ email }, process.env.ACCESS_KEY || 'secret key1', {
      expiresIn: '1h',
    });
    return token;
  }

  static createRefreshToken(email: string) {
    const token = sign({ email }, process.env.REFRESH_KEY || 'secret key12', {
      expiresIn: '2d',
    });
    return token;
  }

  //   async validateAccseToken(email: string, token: string) {
  //     try {
  //       const isValidAccessToken = jwt.verify(token, process.env.ACCESS_KEY);
  //     } catch (err) {
  //       console.log(err);
  //       throw new Error('Invalid token');
  //     }
  //   }

  //   async validateRefreshToken(email: string, token: string) {

  //   }
}
