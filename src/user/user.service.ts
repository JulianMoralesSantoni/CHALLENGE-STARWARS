import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/throwError';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepositorio: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let userCreated = new User();
    const errorSearch = '';
    try {
      const users = await this.findUserByEmail(createUserDto.user_email);
      const userFound = users.find(
        (user) => user.user_email == createUserDto.user_email,
      );
      console.log(userFound);

      if (!userFound) {
        throw new BadRequestException(
          `Ya existe un usuario con email ${userFound.user_email}`,
        );
      }
      userCreated = this.userRepositorio.create(createUserDto);
      userCreated = await this.userRepositorio.save(userCreated);
    } catch (error) {
      throw new InternalServerErrorException('Ocurrio un error, no se pudo crear el Usuario');
    }
    return userCreated;
  }

  async findUserByEmail(email: string) {
    try {
      const user = await this.userRepositorio.find({
        relations: {
          userType: true,
        },
        where: {
          user_email: email,
        },
      });

      if(!user){
        throw new BadRequestException(
          `No existe el usuario con email: ${email}`,
        );
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrio un error, no se pudo devolver el usuario',
      );
    }
  }

  async findAll() {
    try {
      const users = await this.userRepositorio.find({
        relations: { userType: true },
      });
      return users;
    } catch (error) {
      ErrorManager.createSignatureError(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
