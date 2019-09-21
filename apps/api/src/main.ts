import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { getDbConnectionOptions } from './app/shared/utils';
import { ValidationPipe, Logger } from '@nestjs/common';

require('dotenv').config();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.port || 3333;
//   await app.listen(port, () => {
//     console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }
//
// bootstrap();
//
//
//

async function bootstrap() {
  const globalPrefix = 'api';
 const port = process.env.API_PORT || 3333;
  const context = 'Bootstrap';

  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV)),
    {
      logger: console
    }
  );

  app.setGlobalPrefix(globalPrefix);

  // Apply validation for all inputs globally
  app.useGlobalPipes(
    new ValidationPipe({
      // Strip away all none-object existing properties
      whitelist: true,
      // Transform input objects to their corresponding DTO objects
      transform: true
    })
  );

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix, context);
  });

  Logger.log(`Started running on http://localhost:${port}`, context);
}

bootstrap();
