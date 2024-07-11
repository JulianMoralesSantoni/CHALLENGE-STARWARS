import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Token } from 'src/entities/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'abc123',
    });
  }

  async validate(payload: any) {
    let tokens = await this.tokenRepository.find({
      where: { user_email: payload.userEmail },
    });
    let lastToken =  tokens.reduce((max, obj) => (obj.id_token > max.id_token ? obj : max), tokens[0]);
    if (!lastToken) {
      throw new UnauthorizedException('Usted no ha iniciado sesión');
    }
    console.log(lastToken);
    const tokenAge = new Date().getTime() - lastToken.start_date.getTime();
    const tokenExpirationTime = 600 * 1000;
    console.log(tokenAge);
    console.log(tokenExpirationTime);
    if (tokenAge > tokenExpirationTime) {
      throw new UnauthorizedException('Se agoto el tiempo de sesión');
    }
    
    lastToken.start_date = new Date()
    await this.tokenRepository.save(lastToken)

    return {
      userId: payload.sub,
      username: payload.username,
      userType: payload.userType,
    };
  }
}
