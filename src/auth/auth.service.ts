import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from '../entities/token.entity';
import { Repository } from 'typeorm';
import { ResponseLoginDto } from './dto/responseLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(UserService)
    private userService: UserService,
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
  ) {}

  async validateUser({ userEmail, password }: AuthPayloadDto) {
    const users = await this.userService.findUserByEmail(userEmail);
    const userFound = users.find((user) => user.user_email == userEmail);
    if (!userFound) {
      throw new UnauthorizedException('Email o contraseña invalidos');
    }

    const isPasswordValid = password === userFound.password; // Consider using a hashed password comparison
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email o contraseña invalidos');
    }
    if (!userFound) return null;
    if (isPasswordValid) {
      const payload = {
        userName: userFound.user_name,
        userType: userFound.userType.user_type_name,
        userEmail: userFound.user_email,
      };
      const tokenGenerated = this.jwtService.sign(payload);
      const token = this.tokenRepository.create({
        user_email: userFound.user_email,
        start_date: new Date(),
        token: tokenGenerated,
      });
      let tokenResponse = new ResponseLoginDto()
      tokenResponse.token = tokenGenerated
      await this.tokenRepository.save(token);
      return tokenResponse;
    }
  }
}
