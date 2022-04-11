import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ToDoListService } from './service/app.service';
import configuration from '../config/config';
@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [AppController],
  providers: [ToDoListService],
})
export class AppModule {}
