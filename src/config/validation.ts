import { LogLevel } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export enum ScreamLevel {
  Error = 'error',
  Warn = 'warn',
  Log = 'log',
  Debug = 'debug',
  Verbose = 'verbose',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV?: Environment = Environment.Development;

  @IsNumber()
  APP_PORT?: number = 5000;

  @IsString()
  APP_PREFIX?: string = '';

  @IsEnum(ScreamLevel)
  APP_LOG_LEVEL?: LogLevel = 'debug';

  @IsString()
  DB_NAME?: string = 'sharely';

  @IsString()
  DB_HOST?: string = 'localhost';

  @IsNumber()
  DB_PORT?: number = 27_017;
}

export function validateConfig(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
    whitelist: true,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
