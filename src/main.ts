import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // supprime les champs non déclarés dans le DTO
      forbidNonWhitelisted: true, // rejette la requête si un champ inconnu est envoyé
      transform: true,          // convertit automatiquement les types (ex: string → number)
    }),
  );

  await app.listen(3000);
}
bootstrap();