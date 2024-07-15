import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

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

      if (userFound) {
        throw new BadRequestException(
          `Ya existe un usuario con email ${userFound.user_email}`,
        );
      }
      userCreated = this.userRepositorio.create(createUserDto);
      userCreated = await this.userRepositorio.save(userCreated);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: errorSearch ? errorSearch : error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
        },
      );
    }
    return userCreated;
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepositorio.find({
      relations: {
        userType: true,
      },
      where: {
        user_email: email,
      },
    });
    return user;
  }

  async findAll() {
    const users = await this.userRepositorio.find({
      relations: { userType: true },
    });
    console.log('Estos son los users');
    console.log(users);
    return users;
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
