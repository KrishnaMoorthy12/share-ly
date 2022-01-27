import { Module } from '@nestjs/common';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { morganDevFormat } from '../../tools/request-logger';

@Module({
  imports: [MorganModule],
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
