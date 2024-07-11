import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorator/role.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('Administrador')
  @Post('user')
  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'OK',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 403,
    description: 'UNAUTHORIZED',
    example: ''
  })
  @ApiResponse({
    status: 500,
    description: 'INTERNAL SERVER ERROR',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
