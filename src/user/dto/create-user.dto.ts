import { Type } from 'class-transformer';
import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { UserType } from 'src/entities/userType.entity';

export class CreateUserDto {
  @IsEmail()
  user_email: string;
  @IsString()
  user_last_name: string;
  @IsString()
  user_name: string;
  @ValidateNested()
  @Type(() => UserType)
  userType: UserType;
}
