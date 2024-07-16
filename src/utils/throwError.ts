import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorManager extends Error {
  constructor({
    type,
    message,
  }: {
    type: keyof typeof HttpStatus;
    message: string;
  }) {
    super(message);
    this.name = type;
  }

  public static createSignatureError(message: string) {
    const [name, errorMessage] = message.split(' :: ');

    if (name in HttpStatus) {
      throw new HttpException(errorMessage || message, HttpStatus[name]);
    } else {
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
