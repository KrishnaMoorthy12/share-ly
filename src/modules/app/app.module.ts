import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { dbConfig, DbConfigType, rootConfig } from '../../config';
import { validateConfig } from '../../config/validation';
import { morganDevFormat } from '../../tools/request-logger';
import { UserModule } from '../user/user.module';

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
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const dbConfig = config.get<DbConfigType>('db');

        return {
          type: 'mongodb',
          host: dbConfig.host,
          port: dbConfig.port,
          database: dbConfig.name,

          useUnifiedTopology: true,
          useNewUrlParser: true,

          autoLoadEntities: true,
          synchronize: config.get('NODE_ENV') !== 'production',
        };
      },
    }),
    UserModule,
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: MorganInterceptor(morganDevFormat),
    },
  ],
})
export class AppModule {}
