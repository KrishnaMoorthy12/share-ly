import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RootConfigType } from './config';
import { AppModule } from './modules/app/app.module';
import { Screamer } from './tools/screamer';

async function bootstrap() {
  const logger = new Screamer();
  const app = await NestFactory.create(AppModule, { logger });

  const rootConfig = app.get(ConfigService).get<RootConfigType>('root');

  const config = new DocumentBuilder()
    .setTitle(rootConfig.appName)
    .setDescription(rootConfig.appDescription)
    .setVersion(rootConfig.appVersion)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(rootConfig.docsRoute, app, document);

  app.setGlobalPrefix(rootConfig.prefix);
  await app.listen(rootConfig.port);

  logger.log(`App is listening at: ${await app.getUrl()}`, 'ApplicationRoot');
}
bootstrap();
