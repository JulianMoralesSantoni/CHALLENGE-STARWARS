import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthPayloadDto {
  @ApiProperty()
  @IsEmail()
  userEmail: string;
  @ApiProperty()
  @IsString()
  password: string;
}
