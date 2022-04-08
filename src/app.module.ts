import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ToDoListService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ToDoListService],
})
export class AppModule {}
