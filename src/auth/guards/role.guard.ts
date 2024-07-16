import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      return false;
    }
    const payload = this.jwtService.decode(token) as any;
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles.includes(payload.userType)) {
      throw new UnauthorizedException('No tienes acceso a este recurso');
    } else {
      return roles.includes(payload.userType);
    }
  }
}
