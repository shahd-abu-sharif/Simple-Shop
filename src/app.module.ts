//? this is the Root module

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // any module we make , we should import it here
  controllers: [AppController],
  providers: [AppService],
})
export class  AppModule {}
