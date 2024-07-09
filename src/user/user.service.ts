import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepositorio: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let userCreated = new User();
    let errorSearch = '';
    try {
      const user = await this.findUserByEmail(createUserDto.user_email);
      if (user) {
        errorSearch = `Ya existe un usuario con email ${user.user_email}`;
        new Error();
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
    const user = await this.userRepositorio.findOneBy({
      user_email: email,
    });
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
