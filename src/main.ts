import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Screamer } from './tools/screamer';

async function bootstrap() {
  const logger = new Screamer();
  const app = await NestFactory.create(AppModule, { logger });

  const config = new DocumentBuilder()
    .setTitle('ShareLy')
    .setDescription('The ShareLy API description')
    .setVersion('0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  logger.log(`App is listening at: ${await app.getUrl()}`, 'ApplicationRoot');
}
bootstrap();
