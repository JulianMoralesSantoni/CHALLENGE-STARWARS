import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'userEmail' });
  }

  async validate(userEmail: string, password: string) {
    console.log('Inside LocalStrategy');
    const user = await this.authService.validateUser({ userEmail, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
