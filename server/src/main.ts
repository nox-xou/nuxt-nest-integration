import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('App');
  const port = process.env.DEV_SERVER_PORT || 4000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(port, '0.0.0.0', () => {
    logger.log(`listen on port ${port}`);
  });
}
bootstrap();
