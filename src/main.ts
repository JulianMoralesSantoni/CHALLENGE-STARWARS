import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
const pjson = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error', 'log', 'fatal', 'debug'],
  });
  const configService = app.get(ConfigService);
  const port = configService.get('HOST');

  const config = new DocumentBuilder()
    .setTitle('CHALLENGE CONEXA')
    .setDescription('Desafio de empresa conexa')
    .setVersion(pjson.version)
    .addTag('STAR WARS')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
}

bootstrap();
