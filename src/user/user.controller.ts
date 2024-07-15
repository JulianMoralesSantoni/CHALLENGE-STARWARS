import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('Administrador')
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
    example: '',
  })
  @ApiResponse({
    status: 500,
    description: 'INTERNAL SERVER ERROR',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
