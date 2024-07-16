import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseLoginDto } from './dto/responseLogin.dto';
import { Token } from 'src/entities/token.entity';
import { AuthPayloadDto } from './dto/auth.dto';
@ApiTags('Sign In')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary:
      'Este metodo devuelve el token cuando el email y password son validos. Si no se realiza una peticion pasados los 6 minutos, debera logeuarse devuelta',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    example: {
      token: 'ejfikrfork',
    },
    type: ResponseLoginDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Email o contraseña invalidos',
  })
  @ApiBody({
    type: AuthPayloadDto,
  })
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }
}
