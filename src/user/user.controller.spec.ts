import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { describe } from 'node:test';
import { User } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('create', () => {
    it('must return an Object of type Article', async () => {
      jest
        .spyOn(userService, 'create')
        .mockImplementation(() =>
          Promise.resolve({ name: 'example' } as unknown as Promise<User>),
        );
    });
  });
});
