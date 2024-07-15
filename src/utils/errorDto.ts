import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto extends Error {
  @ApiProperty()
  code: string;
  @ApiProperty()
  message: string;

  constructor(code: string, message: string) {
    super();
    this.code = code;
    this.message = message;
  }
}
