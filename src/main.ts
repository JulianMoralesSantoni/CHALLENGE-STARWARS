import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      logger:['warn', 'error', 'log', 'fatal', 'debug'],
    }
  );
  const configService = app.get(ConfigService);
  const port = configService.get('HOST');
  await app.listen(port);
}


bootstrap();
