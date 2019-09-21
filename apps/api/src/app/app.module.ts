import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TypeOrmModule.forFeature([]) ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [ AppController ],
      imports: [ TypeOrmModule.forRoot(connOptions) ],
      providers: [ AppService ]
    };
  }
}
