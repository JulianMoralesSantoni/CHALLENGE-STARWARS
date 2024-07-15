import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { UserType } from '../../entities/userType.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  user_email: string;
  @ApiProperty()
  @IsString()
  user_last_name: string;
  @ApiProperty()
  @IsString()
  user_name: string;
  @ApiProperty()
  @ValidateNested()
  @Type(() => UserType)
  userType: UserType;
}
