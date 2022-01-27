import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { dbConfig, rootConfig } from '../../config';
import { validateConfig } from '../../config/validation';
import { morganDevFormat } from '../../tools/request-logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MorganModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [rootConfig, dbConfig],
      cache: true,
      validate: validateConfig,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_INTERCEPTOR',
      useClass: MorganInterceptor(morganDevFormat),
    },
  ],
})
export class AppModule {}
