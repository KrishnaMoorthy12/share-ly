import { LogLevel } from '@nestjs/common';
import { Environment } from 'src/config/validation';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: Environment;
      APP_PORT: number;
      APP_PREFIX: string;
      APP_LOG_LEVEL: LogLevel;

      DB_NAME: string;
      DB_HOST: string;
      DB_PORT: number;
    }
  }
}

export {};
