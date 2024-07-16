import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Post('user')
  @ApiOperation({
    summary: 'Este metodo crea un usuario',
  })
  @ApiResponse({
    status: 201,
    description: 'OK',
    type: User,
  })
  @ApiResponse({
    status: 400,
    description: `Ya existe un usuario con email testemail@gmail.com`
  })
  @ApiResponse({
    status: 500,
    description: 'Ocurrio un error, no se pudo crear el Usuario',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
