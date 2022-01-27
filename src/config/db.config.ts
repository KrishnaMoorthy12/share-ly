import { registerAs } from '@nestjs/config';

export const dbConfig = registerAs('db', () => ({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,

  name: process.env.DB_NAME,
}));

export type DbConfigType = ReturnType<typeof dbConfig>;
