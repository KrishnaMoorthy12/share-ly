import { registerAs } from '@nestjs/config';

export const rootConfig = registerAs('root', () => ({
  appName: 'ShareLy',
  appDescription: 'An app to share expenses - task for Zuperly Backend Internship application',
  appVersion: '0.1.0',
  port: process.env.APP_PORT,
  prefix: process.env.APP_PREFIX,
  logLevel: process.env.APP_LOG_LEVEL,
  docsRoute: 'docs',
}));

export type RootConfigType = ReturnType<typeof rootConfig>;
